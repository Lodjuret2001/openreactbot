import { ChatCompletionMessage } from "openai/src/resources/index.js";
import { OpenAIMessage } from "../types/orbTypes";

function createOpenAiTypeMessage(
  message: ChatCompletionMessage | string
): OpenAIMessage {
  if (typeof message === "string") {
    return { role: "user", content: message };
  } else {
    const { role, content } = message;
    if (content === null) throw new Error("Content from ChatGPT was 'null'...");
    return { role: role, content: content };
  }
}

export default createOpenAiTypeMessage;
