import { useEffect, useState } from "react";
import OpenAI, { ClientOptions } from "openai";
import { Config, ChatBotMessage } from "../types/chatBotTypes";
import createNewMessage from "../utils/createNewMessage";

const useOpenAI = (API_KEY: string, config: Config) => {
  const { prompt, helloMessage, model } = config;
  const [isTyping, setIsTyping] = useState(false);
  const [input, setInput] = useState<ChatBotMessage | null>(null);
  const [chatBotMessages, setChatbotMessages] = useState<ChatBotMessage[]>([
    { role: "assistant", content: `${helloMessage}` },
  ]);

  const opts: ClientOptions = {
    apiKey: API_KEY,
    dangerouslyAllowBrowser: true,
  };
  const openai = new OpenAI(opts);

  useEffect(() => {
    if (input === null) return;

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
    }
    handleChatBot();
  }, [input]);

  return { chatBotMessages, isTyping, setChatbotMessages, setInput };
};

export default useOpenAI;
