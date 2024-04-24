import { ChatCompletionMessage } from "openai/resources/index.mjs";
import { ChatBotMessage } from "../types/orbTypes";
declare function createNewMessage(message: ChatCompletionMessage): ChatBotMessage;
export default createNewMessage;
