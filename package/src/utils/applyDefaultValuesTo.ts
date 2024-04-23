import { OptionalConfig } from "../types/chatBotTypes";
import chatBotIcon from "../assets/chatbot-icon.png";
import userIcon from "../assets/user-icon.png";
import openreactbotIcon from "../assets/chatbot-icon.png";

const applyDefaultValueTo = (
  optionalConfig: OptionalConfig
): OptionalConfig => {
  const defaultValues: OptionalConfig = {
    logo: `${openreactbotIcon}`,
    textColor: "black",
    width: "300px",
    height: "600px",
    placeholder: "Type your message...",
    chatBotImg: `${chatBotIcon}`,
    chatMessageBackground: "blue",
    userImg: `${userIcon}`,
    userMessageBackground: "blue",
  };

  return {
    ...defaultValues,
    ...optionalConfig,
  };
};

export default applyDefaultValueTo;
