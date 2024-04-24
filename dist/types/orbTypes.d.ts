export type OpenReactBotProps = {
    API_KEY: string;
    AIConfig: AIConfig;
    stylesConfig: StylesConfig;
};
export type AIConfig = {
    prompt: string;
    startMessage: string;
    model: string;
};
export type StylesConfig = {
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
export type ChatBotMessage = {
    role: "system" | "assistant" | "user";
    content: string;
};
