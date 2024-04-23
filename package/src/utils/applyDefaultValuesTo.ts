import { StylesConfig } from "../types/chatBotTypes";
import chatBotIcon from "../assets/chatbot-icon.png";
import userIcon from "../assets/user-icon.png";
import openreactbotIcon from "../assets/openreactbot-icon.png";

const applyDefaultValueTo = (stylesConfig: StylesConfig): StylesConfig => {
  const defaultValues: StylesConfig = {
    name: "OpenReactBot",
    logo: `${openreactbotIcon}`,
    logoHeight: "100px",
    logoWidth: "100px",
    logoBorderRadius: "50px",
    bottom: "30px",
    left: undefined,
    right: "20px",
    textColor: "black",
    width: "300px",
    height: "600px",
    placeholder: "Type your message...",
    chatBotImg: `${chatBotIcon}`,
    chatMessageBackground: "blue",
    userImg: `${userIcon}`,
    userMessageBackground: "blue",
  };

  return { ...defaultValues, ...stylesConfig };
};

export default applyDefaultValueTo;
