import applyDefaultValueTo from "../helpers/applyDefaultValuesTo";
import initializeOpenAI from "../utils/initializeOpenAI";
import createRckConfig from "../utils/createRckConfig";
import Chatbot from "react-chatbot-kit";
import ChatBotMainContainer from "./ChatBotContainer";
import CloseChatBot from "./CloseChatBot";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import LogoButton from "./LogoButton";
import React, { useState } from "react";
import { OpenReactBotProps } from "../types/orbTypes";

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
    styles.headerText,
    styles.chatBotImg,
    styles.userImg,
    AIConfig,
    AIConfig.startMessage,
    openai
  );

  return (
    <>
      {isOpen ? (
        <ChatBotMainContainer>
          <CloseChatBot handleSetIsOpen={handleSetIsOpen} />
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
          />
        </ChatBotMainContainer>
      ) : (
        <LogoButton styles={styles} handleSetIsOpen={handleSetIsOpen} />
      )}
    </>
  );
};

export default OpenReactBot;
