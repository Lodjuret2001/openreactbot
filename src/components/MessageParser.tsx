import React from "react";
import { MessageParserProps } from "../types/rckTypes";

const MessageParser = ({ children, actions }: MessageParserProps) => {
  const parse = (message: string) => {
    if (typeof message === "string") {
      actions.handleSend(message);
    } else return;
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
