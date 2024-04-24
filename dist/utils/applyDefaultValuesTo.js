import chatBotIcon from "../../assets/chatbot-icon.png";
import userIcon from "../../assets/user-icon.png";
import openreactbotIcon from "../../assets/orb-logo.png";
import "../../assets";
const applyDefaultValueTo = (stylesConfig) => {
    const defaultValues = {
        bottom: "30px",
        chatBotImg: `${chatBotIcon}`,
        height: "600px",
        left: "",
        logo: `${openreactbotIcon}`,
        logoBorderRadius: "50px",
        logoHeight: "100px",
        logoWidth: "100px",
        name: "OpenReactBot",
        placeholder: "Type your message...",
        right: "20px",
        userImg: `${userIcon}`,
        width: "350px",
    };
    return { ...defaultValues, ...stylesConfig };
};
export default applyDefaultValueTo;
