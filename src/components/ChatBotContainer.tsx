import React, { ReactNode } from "react";

const ChatBotMainContainer = ({ children }: Props) => {
  return <div className="react-chatbot-kit-main-container">{children}</div>;
};

type Props = {
  children: ReactNode;
};

export default ChatBotMainContainer;
