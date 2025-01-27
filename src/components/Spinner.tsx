import React from "react";

interface SpinnerProps {
  size?: string; // Tamaño del spinner (e.g., "w-8 h-8")
  color?: string; // Color del spinner (e.g., "border-blue-500")
}

const Spinner: React.FC<SpinnerProps> = ({
  size = "w-8 h-8",
  color = "border-blue-500",
}) => {
  return (
    <div
      className={`animate-spin rounded-full border-4 ${color} border-t-blue-500 ${size}`}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
