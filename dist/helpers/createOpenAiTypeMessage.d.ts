import { ChatCompletionMessage } from "openai/src/resources/index.js";
import { OpenAIMessage } from "../types/orbTypes";
declare function createOpenAiTypeMessage(message: ChatCompletionMessage | string): OpenAIMessage;
export default createOpenAiTypeMessage;
