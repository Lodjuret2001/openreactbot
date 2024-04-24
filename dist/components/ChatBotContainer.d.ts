import { ReactNode } from "react";
import { StylesConfig } from "../types/orbTypes";
type Props = {
    styles: StylesConfig;
    children: ReactNode;
};
declare const ChatBotContainer: ({ styles, children }: Props) => import("react").JSX.Element;
export default ChatBotContainer;
