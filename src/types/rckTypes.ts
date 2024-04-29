import { ReactElement } from "react";
import { ChatBotMessage } from "./orbTypes";

export type MessageParserProps = {
  children: ReactElement;
  actions: Actions;
};

export type ActionProviderProps = {
  state: ChatBotMessage[];
  setState: React.Dispatch<React.SetStateAction<ChatBotMessage[]>>;
  children: ReactElement;
};

export type Actions = {
  handleSend: (message: string) => void;
};
