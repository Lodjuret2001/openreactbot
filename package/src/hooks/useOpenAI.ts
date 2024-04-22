import { useEffect, useState } from "react";
import OpenAI, { ClientOptions } from "openai";
import { Config, ChatBotMessage } from "../types/chatBotTypes";
import createNewMessage from "../utils/createNewMessage";

const useOpenAI = (API_KEY: string, config: Config) => {
  const { prompt, helloMessage, model } = config;
  const [isTyping, setIsTyping] = useState(false);
  const [userInput, setUserInput] = useState<ChatBotMessage | undefined>(
    undefined
  );
  const [chatBotMessages, setChatbotMessages] = useState<ChatBotMessage[]>([
    { role: "assistant", content: `${helloMessage}` },
  ]);

  const opts: ClientOptions = {
    apiKey: API_KEY,
    dangerouslyAllowBrowser: true,
  };
  const openai = new OpenAI(opts);

  useEffect(() => {
    async function handleChatBot() {
      console.log("Calling ChatGPT...");

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
      console.log(chatBotMessages);
      console.log("Finished calling ChatGPT...");
      setIsTyping(false);
    }
    handleChatBot();
  }, [userInput]);

  return { chatBotMessages, isTyping, setChatbotMessages, setUserInput };
};

export default useOpenAI;
