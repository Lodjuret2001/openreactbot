import React from "react";

const CloseChatBot = ({ handleSetIsOpen }: CloseChatBotProps) => {
  const closeChatBotStyles: React.CSSProperties = {
    position: "absolute",
    top: "10px",
    right: "10px",
    zIndex: 100,
    fontSize: "17px",
    background: "transparent",
    border: "none",
  };

  return (
    <button
      className="orb-close--chatbot"
      style={closeChatBotStyles}
      onClick={() => handleSetIsOpen()}
    >
      X
    </button>
  );
};

export type CloseChatBotProps = {
  handleSetIsOpen: () => void;
};

export default CloseChatBot;
