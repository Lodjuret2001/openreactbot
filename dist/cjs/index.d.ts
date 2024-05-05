import react, { ReactNode } from 'react';

type OpenReactBotProps = {
    API_KEY: string;
    AIConfig: AIConfig;
    stylesConfig: StylesConfig;
};
type AIConfig = {
    prompt: string;
    startMessage: string;
    model: string;
};
type StylesConfig = {
    bottom?: string;
    chatBotImg?: string;
    height?: string;
    left?: string;
    logo?: string;
    logoBorderRadius?: string;
    logoHeight?: string;
    logoWidth?: string;
    name?: string;
    placeholder?: string;
    right?: string;
    userImg?: string;
    width?: string;
};
type ChatBotMessage = {
    role: "system" | "assistant" | "user";
    content: string;
};

type ChatBotContainerProps = {
    styles: StylesConfig;
    children: ReactNode;
};

type CloseChatBotProps = {
    handleSetIsOpen: () => void;
};

type LogoButtonProps = {
    styles: StylesConfig;
    handleSetIsOpen: () => void;
};

declare const OpenReactBot: ({ API_KEY, AIConfig, stylesConfig, }: OpenReactBotProps) => react.JSX.Element;

export { type AIConfig, type ChatBotContainerProps, type ChatBotMessage, type CloseChatBotProps, type LogoButtonProps, type OpenReactBotProps, type StylesConfig, OpenReactBot as default };
