import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function Modal({ show, onClose, children, title }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/50 ">
      <div className="bg-white sm:max-w-[500px] sm:h-[500px] w-full h-full sm:rounded-lg p-16 sm:p-8  overflow-y-auto  flex place-content-center sm:block">
        <div className={`flex flex-col items-center gap-20 sm:gap-4`}>
          {title && (
            <h1 className="text-2xl text-[#3b4363] uppercase font-bold">
              {title}
            </h1>
          )}
          <a
            href="#"
            onClick={handleClose}
            className="order-3 sm:-order-1 sm:self-end"
          >
            <button>
              <img src="/icon-close.svg" alt="close" />
            </button>
          </a>

          <div className="pt-8 flex-grow order-2">{children}</div>
        </div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal')
    );
  } else {
    return null;
  }
}

export default Modal;
