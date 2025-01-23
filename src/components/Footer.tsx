import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className=" text-white py-4 fix" style={{backgroundColor: "#0f0d1d"}}>
      <div className="container mx-auto text-center">
        <a
          href="/privacy-policy"
          className="text-gray-400 hover:text-gray-200 underline"
        >
          Políticas de Privacidad
        </a>
      </div>
    </footer>
  );
};

export default Footer;