import ChatBotHeader from "../components/ChatBotHeader.jsx";
import UserAvatar from "../components/UserAvatar.jsx";
import BotAvatar from "../components/BotAvatar.jsx";
import { createChatBotMessage } from "react-chatbot-kit";
const createRckConfig = (botName, headerText, chatAvatar, userAvatar, config, startMessage, openai) => {
    let openAIMessages = [
        { role: "assistant", content: `${startMessage}` },
    ];
    const rckConfig = {
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
