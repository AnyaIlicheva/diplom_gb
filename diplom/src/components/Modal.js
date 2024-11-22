import React from "react";
import "../styles/main.scss";

const Modal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <p>{message}</p>
        <div className="modal-buttons">
          <button onClick={onConfirm}>Да</button>
          <button onClick={onCancel}>Нет</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
