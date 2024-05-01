import React from "react";
import { MessageParserProps } from "../types/rckTypes";

const MessageParser = ({ actions, children }: MessageParserProps) => {
  const parse = (message: string) => {
    typeof message === "string" && message !== ""
      ? actions.handleSend(message)
      : actions.handleEmptyString();
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
