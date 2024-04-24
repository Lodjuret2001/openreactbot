export type AIConfig = {
  prompt: string;
  startMessage: string;
  model: string;
};

export type StylesConfig = {
  name?: string;
  logo?: string;
  logoHeight?: string;
  logoWidth?: string;
  logoBorderRadius?: string;
  bottom?: string;
  left?: string;
  right?: string;
  width?: string;
  height?: string;
  placeholder?: string;
  chatBotImg?: string;
  userImg?: string;
};

export type OpenReactBotProps = {
  API_KEY: string;
  AIConfig: AIConfig;
  stylesConfig: StylesConfig;
};

export type ChatBotMessage = {
  role: "system" | "assistant" | "user";
  content: string;
};
