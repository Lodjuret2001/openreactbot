export type AIConfig = {
  prompt: string;
  model: string;
  startMessage: string;
};

export type OpenAIMessage = {
  content: string;
  role: "system" | "assistant" | "user";
};

export type OpenReactBotProps = {
  API_KEY: string;
  AIConfig: AIConfig;
  stylesConfig: StylesConfig;
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
