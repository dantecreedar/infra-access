import React from "react";
import ReactDOM from "react-dom";

const Notification: React.FC = () => {
  return ReactDOM.createPortal(
    <div className="fixed top-16 right-4 w-64 bg-white text-gray-800 rounded shadow-lg z-50">
      <ul>
        <li className="p-3 border-b border-gray-200">Notificación 1</li>
        <li className="p-3 border-b border-gray-200">Notificación 2</li>
        <li className="p-3">Notificación 3</li>
      </ul>
    </div>,
    document.body // Renderiza directamente en el <body>
  );
};

export default Notification;