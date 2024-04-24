import { ChatCompletionMessage } from "openai/resources/index.mjs";
import { ChatBotMessage } from "../types/orbTypes";

function createNewMessage(message: ChatCompletionMessage): ChatBotMessage {
  const { role, content } = message;
  if (content === null) throw new Error("Content from ChatGPT was 'null'...");
  return { role: role, content: content };
}

export default createNewMessage;
