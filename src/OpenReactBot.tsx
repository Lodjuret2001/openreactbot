import "react-chatbot-kit/build/main.css";
import applyDefaultValueTo from "./helpers/applyDefaultValuesTo.js";
import initializeOpenAI from "./utils/initializeOpenAI.js";
import createRckConfig from "./utils/createRckConfig.js";
import Chatbot from "react-chatbot-kit";
import ChatBotContainer from "./components/ChatBotContainer.jsx";
import ActionProvider from "./components/ActionProvider.jsx";
import MessageParser from "./components/MessageParser.jsx";
import LogoButton from "./components/LogoButton.jsx";
import { useState } from "react";
import { OpenReactBotProps } from "./types/orbTypes.js";

const OpenReactBot = ({
  API_KEY,
  AIConfig,
  stylesConfig,
}: OpenReactBotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const openai = initializeOpenAI(API_KEY);
  const styles = applyDefaultValueTo(stylesConfig);

  const handleSetIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const config = createRckConfig(
    styles.name,
    styles.chatBotImg,
    styles.userImg,
    AIConfig,
    AIConfig.startMessage,
    openai
  );

  return (
    <>
      {isOpen ? (
        <ChatBotContainer styles={styles}>
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
          />
        </ChatBotContainer>
      ) : (
        <LogoButton styles={styles} handleSetIsOpen={handleSetIsOpen} />
      )}
    </>
  );
};

export default OpenReactBot;
