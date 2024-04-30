import { useEffect, useState } from "react";
import { AIConfig, ChatBotMessage } from "../types/orbTypes";
import createNewMessage from "../helpers/createOpenAiTypeMessage";

const useOpenAI = (config: AIConfig) => {
  const { prompt, startMessage, model } = config;
  const [isTyping, setIsTyping] = useState(false);
  const [isInitilalized, setIsInitilalized] = useState(false);
  const [input, setInput] = useState<ChatBotMessage | null>(null);
  const [chatBotMessages, setChatbotMessages] = useState<ChatBotMessage[]>([
    { role: "assistant", content: `${startMessage}` },
  ]);

  useEffect(() => {
    if (!isInitilalized) return;
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
      handleChatBot();
    }
  }, [input]);

  return {
    chatBotMessages,
    isTyping,
    setChatbotMessages,
    setInput,
    setIsInitilalized,
    handleChatBot,
  };
};

export default useOpenAI;
