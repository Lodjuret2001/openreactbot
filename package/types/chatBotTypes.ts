export type Config = {
  prompt: string;
  helloMessage: string;
};

export type OptionalConfig = {
  textColor: string;
  logo: string;
};

export type ChatBotProps = {
  API_KEY: string;
  config: Config;
  optionalConfig: OptionalConfig;
};
