import React from 'react';

const Modal = (props) => {
    const toggleClassName = props.show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={toggleClassName}>
        <section className='modal-main'>
          {props.children}
          <button onClick={props.handleClose}>close</button>
        </section>
      </div>
    );
  };
  
  export default Modal;