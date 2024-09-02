// Modal.js
import React from 'react';
import './Modal.css'; // Ensure you import your CSS

const Modal = ({ children, onClose }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <button onClick={onClose} className="modal-close-button">&times;</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
