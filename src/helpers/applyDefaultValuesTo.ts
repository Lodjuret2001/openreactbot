import { StylesConfig } from "../types/orbTypes";
import chatBotIcon from "../../assets/chatbot-icon.png";
import userIcon from "../../assets/user-icon.png";
import openreactbotIcon from "../../assets/orb-logo.png";

const applyDefaultValueTo = (stylesConfig: StylesConfig) => {
  const defaultValues = {
    bottom: "30px",
    chatBotImg: `${chatBotIcon}`,
    headerText: "Conversation with OpenReactBot",
    left: "",
    logo: `${openreactbotIcon}`,
    logoBorderRadius: "50px",
    logoHeight: "100px",
    logoWidth: "100px",
    name: "OpenReactBot",
    right: "20px",
    userImg: `${userIcon}`,
  };

  return { ...defaultValues, ...stylesConfig };
};

export default applyDefaultValueTo;
