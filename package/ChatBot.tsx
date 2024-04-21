import useOpenAI from "./hooks/useOpenAI.js";
import ChatBotHeader from "./components/ChatBotHeader.js";
import ChatBotDisplay from "./components/ChatBotDisplay.js";
import ChatBotInput from "./components/ChatBotInput.js";
import { ChatBotProps } from "./types/chatBotTypes.js";
const ChatBot = ({ API_KEY, config, optionalConfig }: ChatBotProps) => {
  if (API_KEY) {
    const {} = useOpenAI(API_KEY);
  }

  return (
    <>
      <ChatBotHeader />
      <ChatBotDisplay />
      <ChatBotInput />
    </>
  );
};

export default ChatBot;
