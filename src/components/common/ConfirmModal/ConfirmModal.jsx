import "./ConfirmModal.css";

export const ConfirmModal = ({
  open,
  title = "Confirmar",
  message,
  onConfirm,
  onCancel,
}) => {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="confirm-modal">
        <h3>{title}</h3>

        <p>{message}</p>

        <div className="modal-actions">
          <button type="button" className="btn" onClick={onCancel}>
            Cancelar
          </button>

          <button
            type="button"
            className="btn bg-delete primary"
            onClick={onConfirm}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};
