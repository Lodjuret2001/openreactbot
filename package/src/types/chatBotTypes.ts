export type Config = {
  prompt: string;
  helloMessage: string;
  model: string;
  name: string;
};

export type OptionalConfig = {
  logo?: string;
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
  configuration: {
    API_KEY: string;
    config: Config;
    optionalConfig: OptionalConfig;
  };
};

export type ChatBotMessage = {
  role: "system" | "assistant" | "user";
  content: string;
};
