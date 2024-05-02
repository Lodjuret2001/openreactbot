import OpenAI from "openai";
import IConfig from "react-chatbot-kit/build/src/interfaces/IConfig";
import ChatBotHeader from "../components/ChatBotHeader";
import UserAvatar from "../components/UserAvatar";
import BotAvatar from "../components/BotAvatar";
import { AIConfig, OpenAIMessage } from "../types/orbTypes";
import { createChatBotMessage } from "react-chatbot-kit";

const createRckConfig = (
  botName: string,
  headerText: string,
  chatAvatar: string,
  userAvatar: string,
  config: AIConfig,
  startMessage: string,
  openai: OpenAI
) => {
  let openAIMessages: OpenAIMessage[] = [
    { role: "assistant", content: `${startMessage}` },
  ];

  const rckConfig: IConfig = {
    botName: botName,
    initialMessages: [createChatBotMessage(startMessage, {})],
    customComponents: {
      header: () => ChatBotHeader(headerText),
      botAvatar: () => BotAvatar(chatAvatar),
      userAvatar: () => UserAvatar(userAvatar),
    },
    state: {
      aiConfig: config,
      openai: openai,
      openAIMessages: openAIMessages,
    },
  };
  return rckConfig;
};

export default createRckConfig;
