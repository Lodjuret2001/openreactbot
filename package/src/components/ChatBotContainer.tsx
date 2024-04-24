import { ReactNode } from "react";
import { StylesConfig } from "../types/orbTypes";
type Props = {
  styles: StylesConfig;
  children: ReactNode;
};
const ChatBotContainer = ({ styles, children }: Props) => {
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

export default ChatBotContainer;
