import React from "react";
import ReactDOM from "react-dom";

import "./Modal.css";
const portalRoot = document.getElementById("portal-root");

const UIModal = ({ children, isOpen, onClickClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="ui-modal__overlay">
      <div className="ui-model">
        <div className="ui-model__div__button">
          <button
            type="button"
            className="ui-model__close-button"
            onClick={onClickClose}
          >
            x
          </button>
        </div>
        <div className="ui-model__div__children">{children}</div>
      </div>
    </div>,
    portalRoot
  );
};
export default UIModal;
