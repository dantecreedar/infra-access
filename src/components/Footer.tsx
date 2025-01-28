import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className=" text-white py-4 fix bg-black" >
      <div className="container mx-auto text-center">
        <a
          href="/privacy-policy"
          className="text-white hover:text-gray-200 "
        >
          Políticas de Privacidad
        </a>
      </div>
    </footer>
  );
};

export default Footer;