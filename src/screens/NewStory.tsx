import { useEffect, useRef, useState } from "react";
import { BackIcon, CameraIcon, MicIcon } from "../icons";
import type { Story, StoryKind } from "../stories";

type Props = {
  onBack: () => void;
  onSave: (story: Omit<Story, "id" | "author" | "when">) => void;
};

function formatTime(total: number) {
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export function NewStory({ onBack, onSave }: Props) {
  const [kind, setKind] = useState<StoryKind>("audio");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [photoUrl, setPhotoUrl] = useState<string>();
  const [seconds, setSeconds] = useState(0);
  const [recording, setRecording] = useState(false);
  const [micDenied, setMicDenied] = useState(false);
  const [confirmDraft, setConfirmDraft] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const mediaRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    if (!recording) return;
    const id = window.setInterval(() => setSeconds((n) => n + 1), 1000);
    return () => window.clearInterval(id);
  }, [recording]);

  useEffect(() => {
    if (kind === "audio" || !recording) return;
    setRecording(false);
    mediaRef.current?.stop();
    streamRef.current?.getTracks().forEach((t) => t.stop());
    mediaRef.current = null;
    streamRef.current = null;
  }, [kind, recording]);

  useEffect(() => {
    return () => {
      mediaRef.current?.stop();
      streamRef.current?.getTracks().forEach((t) => t.stop());
    };
  }, []);

  async function toggleRecord() {
    if (recording) {
      setRecording(false);
      mediaRef.current?.stop();
      streamRef.current?.getTracks().forEach((t) => t.stop());
      mediaRef.current = null;
      streamRef.current = null;
      return;
    }

    setSeconds(0);
    setRecording(true);
    setMicDenied(false);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      const recorder = new MediaRecorder(stream);
      mediaRef.current = recorder;
      recorder.start();
    } catch {
      setRecording(false);
      setMicDenied(true);
    }
  }

  function pickPhoto(file: File | undefined) {
    if (!file) return;
    setPhotoUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return URL.createObjectURL(file);
    });
  }

  const hasContent =
    (kind === "audio" && seconds > 0 && !recording) ||
    (kind === "text" && body.trim().length > 0) ||
    (kind === "photo" && Boolean(photoUrl));
  const canSave = hasContent;

  function save() {
    if (!canSave) return;
    const fallbackTitle =
      kind === "audio"
        ? "Голосовая история"
        : kind === "photo"
          ? "История с фотографией"
          : "Семейная история";
    onSave({
      kind,
      title: title.trim() || fallbackTitle,
      duration:
        kind === "audio"
          ? `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`
          : undefined,
      body: kind === "text" ? body.trim() : undefined,
      photoUrl,
    });
  }

  return (
    <section className="screen">
      <header className="composer-head">
        <button
          className="back"
          onClick={() => (hasContent || recording ? setConfirmDraft(true) : onBack())}
          aria-label="Назад"
        >
          <BackIcon />
        </button>
        <h1>Новая история</h1>
      </header>

      <div className="tabs" role="tablist">
        {(
          [
            ["audio", "Голос"],
            ["text", "Текст"],
            ["photo", "Фото"],
          ] as const
        ).map(([value, label]) => (
          <button
            key={value}
            role="tab"
            className={kind === value ? "tab active" : "tab"}
            aria-selected={kind === value}
            onClick={() => setKind(value)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="composer-body">
        {kind === "audio" && (
          <div className="voice-stage">
            <div className="mic-wrap">
              <button
                className={recording ? "mic live" : "mic"}
                onClick={toggleRecord}
                aria-label={recording ? "Остановить запись" : "Начать запись"}
              >
                <MicIcon />
              </button>
            </div>
            <p className="timer">{formatTime(seconds)}</p>
            <p className="hint">
              {micDenied
                ? "Нет доступа к микрофону — можно написать историю текстом"
                : recording
                ? "Идёт запись — нажмите, чтобы остановить"
                : seconds > 0
                  ? "Запись готова. Можно сохранить или записать заново"
                  : "Нажмите, чтобы рассказать голосом"}
            </p>
            {micDenied && (
              <button className="secondary-action" onClick={() => setKind("text")}>
                Написать историю текстом
              </button>
            )}
          </div>
        )}

        {kind === "text" && (
          <div className="text-stage">
            <textarea
              className="area"
              placeholder="Расскажите историю"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
        )}

        {kind === "photo" && (
          <div className="photo-stage">
            <button className="picker" onClick={() => fileRef.current?.click()}>
              {photoUrl ? (
                <img src={photoUrl} alt="Выбранное фото" />
              ) : (
                <>
                  <CameraIcon />
                  <span>Прикрепить фотографию</span>
                </>
              )}
            </button>
            <input
              ref={fileRef}
              className="hidden-file"
              type="file"
              accept="image/*"
              onChange={(e) => pickPhoto(e.target.files?.[0])}
            />
          </div>
        )}

        <input
          className="field"
          placeholder="Название истории"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <button className="btn-primary" disabled={!canSave} onClick={save}>
        Сохранить историю
      </button>

      {confirmDraft && (
        <div className="modal-backdrop" role="presentation">
          <section className="invite-modal" role="dialog" aria-modal="true">
            <p className="kicker">Черновик</p>
            <h2>Сохранить эту историю как черновик?</h2>
            <p>
              В прототипе черновик не хранится, но сценарий нужен, чтобы не
              потерять длинную запись.
            </p>
            <button
              className="btn-primary"
              onClick={() => {
                setConfirmDraft(false);
                onBack();
              }}
            >
              Сохранить черновик
            </button>
            <button className="secondary-action" onClick={onBack}>
              Удалить
            </button>
          </section>
        </div>
      )}
    </section>
  );
}
