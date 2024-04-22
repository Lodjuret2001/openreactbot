import { useEffect, useState } from "react";
import OpenAI, { ClientOptions } from "openai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

const useOpenAI = (API_KEY: string, prompt: string, helloMessage: string) => {
  const [chatBotMessages, setChatbotMessages] = useState<
    ChatCompletionMessageParam[]
  >([
    { role: "system", content: `${prompt}` },
    { role: "assistant", content: `${helloMessage}` },
  ]);

  useEffect(() => {
    const opts: ClientOptions = {
      apiKey: API_KEY,
    };
    const openai = new OpenAI(opts);

    async function createChat(prompt: string, helloMessage: string) {
      await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: chatBotMessages,
      });
    }
    createChat(prompt, helloMessage);
  }, []);

  useEffect(() => {
    async function sendUserMessage() {}
  }, [userMessage]);

  return {};
};

type Message = {
  role: string;
  content: string;
};

export default useOpenAI;
