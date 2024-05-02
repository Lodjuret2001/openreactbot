import React from "react";

const UserAvatar = (userAvatar: string) => {
  return (
    <div className="react-chatbot-kit-user-avatar-container">
      <img className="react-chatbot-kit-user-avatar-icon" src={userAvatar} />
    </div>
  );
};

export default UserAvatar;
