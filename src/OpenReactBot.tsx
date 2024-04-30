import "react-chatbot-kit/build/main.css";
import { useState } from "react";
import applyDefaultValueTo from "./helpers/applyDefaultValuesTo.js";
import initializeOpenAI from "./utils/initializeOpenAI.js";
import createRckConfig from "./utils/createRckConfig.js";
import { OpenReactBotProps } from "./types/orbTypes.js";

//Components
import Chatbot from "react-chatbot-kit";
import ActionProvider from "./components/ActionProvider.jsx";
import MessageParser from "./components/MessageParser.jsx";
import LogoButton from "./components/LogoButton.jsx";

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
    AIConfig.startMessage,

    // styles.chatBotImg,
    // styles.userImg
    openai,
    AIConfig,

  );

  console.log("I am the created config:", config);

  return (
    <>
      {isOpen ? (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            border: "1px solid black",
            padding: "5px",
          }}
        >
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
          />
        </div>
      ) : (
        <LogoButton styles={styles} handleSetIsOpen={handleSetIsOpen} />
      )}
    </>
  );
};

export default OpenReactBot;
