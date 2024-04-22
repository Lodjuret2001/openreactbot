import useOpenAI from "./hooks/useOpenAI.js";
import ChatBotHeader from "./components/ChatBotHeader.js";
import ChatBotDisplay from "./components/ChatBotDisplay.js";
import ChatBotInput from "./components/ChatBotInput.js";
import { ChatBotProps } from "./types/chatBotTypes.js";
const ChatBot = ({ API_KEY, config, optionalConfig }: ChatBotProps) => {

  const { prompt, helloMessage } = config;
  const { logo, textColor } = optionalConfig;

  if (API_KEY) {
    useOpenAI(API_KEY, prompt, helloMessage);
  } else throw new Error("No API_KEY found...");

  return (
    <>
      <ChatBotHeader />
      <ChatBotDisplay />
      <ChatBotInput />
    </>
  );
};

export default ChatBot;
