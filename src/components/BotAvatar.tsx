import React from "react";

const BotAvatar = (chatAvatar: string) => {
  return (
    <div className="react-chatbot-kit-chat-bot-avatar-container">
      <img className="react-chatbot-kit-chat-bot-avatar-icon" src={chatAvatar} />
    </div>
  );
};

export default BotAvatar;
