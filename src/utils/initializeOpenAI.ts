import OpenAI, { ClientOptions } from "openai";

const initializeOpenAI = (API_KEY: string) => {
  const opts: ClientOptions = {
    apiKey: API_KEY,
    dangerouslyAllowBrowser: true,
  };
  return new OpenAI(opts);
};

export default initializeOpenAI;
