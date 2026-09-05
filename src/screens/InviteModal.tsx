import { useState } from "react";

type Props = {
  onClose: () => void;
};

export function InviteModal({ onClose }: Props) {
  const [copied, setCopied] = useState(false);
  const link = "https://vk.com/appXXXX#join_8f3k2p";

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <section className="invite-modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <p className="kicker">Приглашение</p>
        <h2>Пригласить в семью Ивановых</h2>
        <p>
          Тестовая ссылка для родных. В реальном приложении она добавит человека
          в семью после входа через VK или ОК.
        </p>
        <code>{link}</code>
        {copied && <p className="copy-done">Ссылка скопирована</p>}
        <div className="modal-actions-row">
          <button
            className="secondary-action"
            onClick={() => {
              navigator.clipboard?.writeText(link);
              setCopied(true);
            }}
          >
            Копировать
          </button>
          <button className="secondary-action" onClick={() => setCopied(true)}>
            Поделиться
          </button>
        </div>
        <button className="btn-primary" onClick={onClose}>
          Готово
        </button>
      </section>
    </div>
  );
}
