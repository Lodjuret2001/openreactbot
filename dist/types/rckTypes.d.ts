import OpenAI from "openai";
import { ReactElement } from "react";
import { AIConfig, OpenAIMessage } from "./orbTypes";
import { IMessageOptions } from "react-chatbot-kit/build/src/interfaces/IMessages";
export type ActionProviderProps = {
    children: ReactElement;
    createChatBotMessage: (message: string, options: IMessageOptions) => ChatBotMessage;
    setState: React.Dispatch<React.SetStateAction<State>>;
    state: State;
};
export type Actions = {
    handleSend: (message: string) => void;
    handleEmptyString: () => void;
};
export type ChatBotMessage = {
    delay?: number | undefined;
    id: number;
    loading: boolean;
    message: string;
    payload?: any;
    type: string;
    widget?: string | undefined;
};
export type ChatResponseProps = {
    AIConfig: AIConfig;
    isTyping: boolean;
    openai: OpenAI;
    setOpenAIMessages: React.Dispatch<React.SetStateAction<OpenAIMessage[]>>;
    setState: React.Dispatch<React.SetStateAction<State>>;
    setIsTyping: React.Dispatch<React.SetStateAction<boolean>>;
    state: State;
};
export type MessageParserProps = {
    actions: Actions;
    children: ReactElement;
};
export type State = {
    aiConfig: AIConfig;
    messages: ChatBotMessage[];
    openAIMessages: OpenAIMessage[];
    openai: OpenAI;
};
