import React from "react";
import { ActionProviderProps } from "../types/rckTypes";
import { ChatBotMessage } from "../types/orbTypes";

const ActionProvider = ({ setState, children }: ActionProviderProps) => {
    
  const handleSend = (message: string) => {
    const newMessage: ChatBotMessage = { content: message, role: "assistant" };
    setState((prev) => [...prev, newMessage]);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleSend,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
