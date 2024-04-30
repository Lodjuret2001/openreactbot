import IConfig from "react-chatbot-kit/build/src/interfaces/IConfig";
import UserAvatar from "../components/UserAvatar.jsx";
import BotAvatar from "../components/BotAvatar.jsx";
import ChatResponse from "../components/ChatResponse.jsx";
import { AIConfig, OpenAIMessage } from "../types/orbTypes.js";
import { createChatBotMessage } from "react-chatbot-kit";
import OpenAI from "openai";
import { useState } from "react";

const createRckConfig = (
  botName: string,
  startMessage: string,
  //   botAvatar: string,
  //   userAvatar: string
  openai: OpenAI,
  config: AIConfig
) => {
  const [isTyping, setIsTyping] = useState(false);
  let openAIMessages: OpenAIMessage[] = [
    { role: "assistant", content: `${startMessage}` },
  ];

  const rckConfig: IConfig = {
    botName: botName,
    initialMessages: [
      createChatBotMessage(startMessage, { loading: isTyping }),
    ],
    customComponents: {
      botAvatar: (props) => <BotAvatar {...props} />,
      userAvatar: (props) => <UserAvatar {...props} />,
    },
    state: {
      aiConfig: config,
      openai: openai,
      openAIMessages: openAIMessages,
    },
    widgets: [
      {
        widgetName: "chatReponse",
        widgetFunc: (props) => <ChatResponse {...props} />,
        props: {
          openai,
          config,
          isTyping,
          setIsTyping,
          openAIMessages,
        },
        mapStateToProps: ["openAIMessages"],
      },
    ],
  };

  return rckConfig;
};

export default createRckConfig;
