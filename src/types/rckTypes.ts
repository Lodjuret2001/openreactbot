import { ReactElement } from "react";
import { AIConfig, OpenAIMessage } from "./orbTypes";
import OpenAI from "openai";
import { IMessageOptions } from "react-chatbot-kit/build/src/interfaces/IMessages";

export type MessageParserProps = {
  children: ReactElement;
  actions: Actions;
};

type State = {
  messages: ChatBotMessage[];
  openAIMessages: OpenAIMessage[];
  openai: OpenAI;
  aiConfig: AIConfig;
};

export type ActionProviderProps = {
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
  children: ReactElement;
  createChatBotMessage: (
    message: string,
    options: IMessageOptions
  ) => ChatBotMessage;
};

export type Actions = {
  handleSend: (message: string) => void;
};

export type ChatResponseProps = {
  openai: OpenAI;
  AIConfig: AIConfig;
  isTyping: boolean;
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
  setIsTyping: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenAIMessages: React.Dispatch<React.SetStateAction<OpenAIMessage[]>>;
};

export type ChatBotMessage = {
  loading: boolean;
  widget?: string | undefined;
  delay?: number | undefined;
  payload?: any;
  message: string;
  type: string;
  id: number;
};
