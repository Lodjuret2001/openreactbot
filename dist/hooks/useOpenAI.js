import { useEffect, useState } from "react";
import OpenAI from "openai";
import createNewMessage from "../utils/createNewMessage";
const useOpenAI = (API_KEY, config) => {
    const { prompt, startMessage, model } = config;
    const [isTyping, setIsTyping] = useState(false);
    const [isInitilalized, setIsInitilalized] = useState(false);
    const [input, setInput] = useState(null);
    const [chatBotMessages, setChatbotMessages] = useState([
        { role: "assistant", content: `${startMessage}` },
    ]);
    const opts = {
        apiKey: API_KEY,
        dangerouslyAllowBrowser: true,
    };
    const openai = new OpenAI(opts);
    useEffect(() => {
        if (!isInitilalized)
            return;
        async function handleChatBot() {
            setIsTyping(true);
            const response = await openai.chat.completions.create({
                model: model,
                messages: [
                    { role: "system", content: `${prompt}` },
                    ...chatBotMessages,
                ],
            });
            const newMessage = createNewMessage(response.choices[0].message);
            setChatbotMessages([...chatBotMessages, newMessage]);
            setIsTyping(false);
            setIsInitilalized(false);
        }
        handleChatBot();
    }, [input]);
    return {
        chatBotMessages,
        isTyping,
        setChatbotMessages,
        setInput,
        setIsInitilalized,
    };
};
export default useOpenAI;
