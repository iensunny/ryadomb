import { useState } from "react";
import { INVITE_FRAGMENT } from "../constants/fragments";
import { bridge } from "../vk/bridge";
import { inviteLink } from "../vk/session";

type Props = {
  familyName: string;
  appId?: number;
  onClose: () => void;
};

export function InviteModal({ familyName, appId, onClose }: Props) {
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);
  const link = inviteLink(appId, INVITE_FRAGMENT);

  async function copy() {
    try {
      await navigator.clipboard.writeText(link);
    } catch {
      // ignore
    }
    setCopied(true);
  }

  async function share() {
    try {
      await bridge.send("VKWebAppShare", { link });
      setShared(true);
    } catch {
      await copy();
    }
  }

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <section
        className="invite-modal"
        role="dialog"
        aria-modal="true"
        onClick={(event) => event.stopPropagation()}
      >
        <p className="kicker">Приглашение</p>
        <h2>Пригласить в {familyName}</h2>
        <p>
          Родные откроют ссылку во ВКонтакте. Hash после # обработает
          VKWebAppChangeFragment, вход — их профиль VK.
        </p>
        <code>{link}</code>
        {copied && <p className="copy-done">Ссылка скопирована</p>}
        {shared && <p className="copy-done">Открыли окно VK</p>}
        <div className="modal-actions-row">
          <button className="secondary-action" onClick={copy}>
            Копировать
          </button>
          <button className="secondary-action" onClick={share}>
            Поделиться в VK
          </button>
        </div>
        <button className="btn-primary" onClick={onClose}>
          Готово
        </button>
      </section>
    </div>
  );
}
