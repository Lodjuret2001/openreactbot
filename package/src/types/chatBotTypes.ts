export type Config = {
  prompt: string;
  helloMessage: string;
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
  textColor?: string;
  width?: string;
  height?: string;
  placeholder?: string;
  chatBotImg?: string;
  chatMessageBackground?: string;
  userImg?: string;
  userMessageBackground?: string;
};

export type ChatBotProps = {
  configs: {
    API_KEY: string;
    config: Config;
    stylesConfig: StylesConfig;
  };
};

export type ChatBotMessage = {
  role: "system" | "assistant" | "user";
  content: string;
};
