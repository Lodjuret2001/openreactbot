import { ReactNode } from "react";
import { StylesConfig } from "../types/orbTypes";

const ChatBotContainer = ({ styles, children }: Props) => {
  const { bottom, left, right, height, width } = styles;

  const chatBotContainerStyles: React.CSSProperties = {
    position: "fixed",
    bottom: bottom,
    left: left,
    right: right,
    height: height,
    width: width,
    border: "1px solid black",
    padding: "5px",
  };

  return <div style={chatBotContainerStyles}>{children}</div>;
};

type Props = {
  styles: StylesConfig;
  children: ReactNode;
};

export default ChatBotContainer;
