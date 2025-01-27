import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className=" text-white py-4 fix bg-[linear-gradient(210deg,_#3c72fc_-10.59%,_#00060c_300.59%)]" >
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