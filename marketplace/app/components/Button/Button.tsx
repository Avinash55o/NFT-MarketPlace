import React from "react";

interface ButtonProps {
  btnName: string; // The text displayed on the button
  onClick?: () => void; // Optional click handler
  className?: string; // Optional custom styles
  type?: "button" | "submit" | "reset"; // Optional button type

}

export default function Button({
  btnName,
  onClick,
  className = "",
  type = "button",
 
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}   
    >
      {btnName}
    </button>
  );
}