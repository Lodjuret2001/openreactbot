import IConfig from "react-chatbot-kit/build/src/interfaces/IConfig";
// import UserAvatar from "../components/UserAvatar.jsx";
// import BotAvatar from "../components/BotAvatar.jsx";
import { ChatBotMessage } from "../types/orbTypes.js";
import { createChatBotMessage } from "react-chatbot-kit";

const createRckConfig = (
  botName: string,
  startMessage: string,
  chatBotMessages: ChatBotMessage[]
  //   botAvatar: string,
  //   userAvatar: string
) => {
  const config: IConfig = {
    botName: botName,
    initialMessages: [
      createChatBotMessage(startMessage, {}),
    ],
    // customComponents: {
    //   botAvatar: (botAvatar) => BotAvatar(botAvatar),
    //   userAvatar: (userAvatar) => UserAvatar(userAvatar),
    // },
    state: chatBotMessages,
  };

  return config;
};

export default createRckConfig;
