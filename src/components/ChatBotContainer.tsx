import React, { ReactNode } from "react";
import { StylesConfig } from "../types/orbTypes";

const ChatBotContainer = ({ styles, children }: ChatBotContainerProps) => {
  const { bottom, left, right, height, width } = styles;

  const chatBotContainerStyles: React.CSSProperties = {
    position: "fixed",
    bottom: bottom,
    left: left,
    right: right,
    height: height,
    width: width,
  };

  return <div style={chatBotContainerStyles}>{children}</div>;
};

export type ChatBotContainerProps = {
  styles: StylesConfig;
  children: ReactNode;
};

export default ChatBotContainer;
