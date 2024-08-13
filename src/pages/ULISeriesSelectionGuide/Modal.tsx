import React, { useState, useLayoutEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [isRendered, setIsRendered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useLayoutEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => setIsRendered(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isRendered) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none
          transition-opacity duration-300 ease-in-out
          ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      onClick={onClose}
    >
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out
            ${isVisible ? 'opacity-50' : 'opacity-0'}`}
      ></div>
      <div
        className={`relative w-auto max-w-3xl mx-auto my-6 
            transition-all duration-300 ease-in-out
            ${
              isVisible
                ? 'translate-y-0 opacity-100 scale-100'
                : '-translate-y-10 opacity-0 scale-95'
            }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
