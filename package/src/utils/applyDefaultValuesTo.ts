import { StylesConfig } from "../types/chatBotTypes";
import chatBotIcon from "../assets/chatbot-icon.png";
import userIcon from "../assets/user-icon.png";
import openreactbotIcon from "../assets/openreactbot-icon.png";

const applyDefaultValueTo = (stylesConfig: StylesConfig) => {
  const defaultValues = {
    name: "OpenReactBot",
    logo: `${openreactbotIcon}`,
    logoHeight: "100px",
    logoWidth: "100px",
    logoBorderRadius: "50px",
    bottom: "30px",
    left: "",
    right: "20px",
    width: "350px",
    height: "600px",
    placeholder: "Type your message...",
    chatBotImg: `${chatBotIcon}`,
    userImg: `${userIcon}`,
  };

  return { ...defaultValues, ...stylesConfig };
};

export default applyDefaultValueTo;
