import React from "react";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const Footer: React.FC = () => {
  return (
    <footer className="text-white py-4 bg-black">
      <div className="container mx-auto text-end">
        <IconButton className="text-white">
        <MoreVertIcon sx={{ color: "white" }} />
        </IconButton>
      </div>
    </footer>
  );
};

export default Footer;