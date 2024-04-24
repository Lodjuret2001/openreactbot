/// <reference types="react" />
import { AIConfig, ChatBotMessage } from "../types/orbTypes";
declare const useOpenAI: (API_KEY: string, config: AIConfig) => {
    chatBotMessages: ChatBotMessage[];
    isTyping: boolean;
    setChatbotMessages: import("react").Dispatch<import("react").SetStateAction<ChatBotMessage[]>>;
    setInput: import("react").Dispatch<import("react").SetStateAction<ChatBotMessage | null>>;
    setIsInitilalized: import("react").Dispatch<import("react").SetStateAction<boolean>>;
};
export default useOpenAI;
