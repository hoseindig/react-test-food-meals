import ReactDOM from "react-dom";
import React, { Fragment, useEffect, useState } from "react";
import styles from "./Modal.module.css";

const Backdrop = ({ setCardModal }) => {
  return (
    <div onClick={() => setCardModal(false)} className={styles.backdrop}></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlay");
const Modal = (props) => {
  const [domReady, setDomReady] = React.useState(false);
  React.useEffect(() => {
    setDomReady(true);
  }, []);
  return (
    <Fragment>
      {domReady && props.showModal
        ? ReactDOM.createPortal(
            <Backdrop setCardModal={props.setCardModal} />,
            portalElement
          )
        : null}
      {domReady && props.showModal
        ? ReactDOM.createPortal(
            <ModalOverlay>{props.children}</ModalOverlay>,
            portalElement
          )
        : null}
    </Fragment>
  );
};

export default Modal;
