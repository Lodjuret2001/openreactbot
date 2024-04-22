import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import useOpenAI from "./hooks/useOpenAI.js";
import { ChatBotProps, ChatBotMessage } from "./types/chatBotTypes.js";
import { useState } from "react";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  MessageInput,
  Message,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

const ChatBot = ({ API_KEY, config, optionalConfig }: ChatBotProps) => {
  const {} = optionalConfig;
  const [isOpen, setIsOpen] = useState(false);

  const { chatBotMessages, setChatbotMessages, isTyping, setUserInput } =
    useOpenAI(API_KEY, config);

  const handleSend = (message: string) => {
    const newMessage: ChatBotMessage = { role: "user", content: message };
    setChatbotMessages([...chatBotMessages, newMessage]);
    setUserInput(newMessage);
    console.log(chatBotMessages);
  };

  return (
    <>
      {isOpen ? (
        <div style={{ position: "relative", height: "500px" }}>
          <MainContainer>
            <ChatContainer>
              <MessageList
                typingIndicator={isTyping ? <TypingIndicator /> : null}
              >
                {chatBotMessages.map((chat, i) => {
                  return (
                    <Message
                      key={i}
                      model={{
                        message: chat.content,
                        sender: chat.role as string,
                        position: "normal",
                        direction:
                          chat.role === "assistant" ? "incoming" : "outgoing",
                      }}
                    />
                  );
                })}
              </MessageList>
              <MessageInput
                placeholder="Type message here"
                onSend={handleSend}
              />
            </ChatContainer>
          </MainContainer>
          <button onClick={() => setIsOpen(!isOpen)}>Close Chat!X</button>
        </div>
      ) : (
        <div>
          <button onClick={() => setIsOpen(!isOpen)}>Open Chat!</button>
        </div>
      )}
    </>
  );
};

export default ChatBot;
