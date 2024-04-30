import React from "react";
import { ActionProviderProps } from "../types/rckTypes";
import { OpenAIMessage } from "../types/orbTypes";
import createOpenAiTypeMessage from "../helpers/createOpenAiTypeMessage";

const ActionProvider = ({
  children,
  state,
  setState,
  createChatBotMessage,
}: ActionProviderProps) => {
  const handleSend = (message: string) => {
    const openai = state.openai;
    const { prompt, model } = state.aiConfig;
    const openAIMessages = state.openAIMessages;

    const userOpenAIMessage: OpenAIMessage = {
      content: message,
      role: "assistant",
    };

    async function handleChatBot() {
      const response = await openai.chat.completions.create({
        model: model,
        messages: [
          { role: "system", content: `${prompt}` },
          ...openAIMessages,
          userOpenAIMessage,
        ],
      });
      const aiResponseMessage = createOpenAiTypeMessage(
        response.choices[0].message
      );
      const chatBotMessage = createChatBotMessage(aiResponseMessage.content, {
        loading: false,
      });

      setState((prev) => {
        console.log("...prev:", { ...prev });
        return {
          ...prev,
          messages: [...prev.messages, chatBotMessage],
          openAIMessages: [
            ...prev.openAIMessages,
            userOpenAIMessage,
            aiResponseMessage,
          ],
        };
      });
    }
    handleChatBot();
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleSend,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
