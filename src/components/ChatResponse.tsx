import { useEffect, useState } from "react";
import { ChatResponseProps } from "../types/rckTypes";
import createOpenAiTypeMessage from "../helpers/createOpenAiTypeMessage";
import { createChatBotMessage } from "react-chatbot-kit";

const ChatResponse = ({
  openai,
  AIConfig,
  isTyping,
  setIsTyping,
  setState,
  state,
}: ChatResponseProps) => {
  console.log("I am inside Chat Response!");

  const { prompt, model } = AIConfig;
  const [input, setInput] = useState<string>("Hello!");
  const openAIMessages = state.openAIMessages;

  useEffect(() => {
    console.log("Im inside UseEffect!");

    if (!openai) return;
    async function handleChatBot() {
      let isLoading = true;
      const loadingIndicator = createChatBotMessage("", { loading: isLoading });

      const response = await openai.chat.completions.create({
        model: model,
        messages: [{ role: "system", content: `${prompt}` }, ...openAIMessages],
      });
      const aiMessage = createOpenAiTypeMessage(response.choices[0].message);

      setInput(aiMessage.content);
      setIsTyping(false);

      chatBotMessage = {
        message: aiMessage.content,
        widget: undefined,
        delay: undefined,
        payload: undefined,
        loading: false,
        type: "bot",
        id: id,
      };

      setState((prev) => {
        console.log("...prev:", { ...prev });
        return {
          ...prev,
          messages: [...prev.messages, chatBotMessage],
          openAIMessages: [...prev.openAIMessages, aiMessage],
        };
      });
    }
    handleChatBot();
  }, []);

  return (
    <div>
      <p>{input}</p>
    </div>
  );
};

export default ChatResponse;
