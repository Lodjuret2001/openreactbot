import { ChatCompletionMessage } from "openai/src/resources/index.js";

const createOpenAIMessage = (message: string): ChatCompletionMessage => {
  return { role: "user", content: message };
};

export default createOpenAIMessage;
