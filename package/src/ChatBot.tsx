import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { useState } from "react";
import useOpenAI from "./hooks/useOpenAI.js";
import applyDefaultValueTo from "./utils/applyDefaultValuesTo.js";
import { ChatBotProps, ChatBotMessage } from "./types/chatBotTypes.js";

import {
  MainContainer,
  ChatContainer,
  MessageList,
  MessageInput,
  Message,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

const ChatBot = ({ configuration }: ChatBotProps) => {
  const { API_KEY, config, optionalConfig } = configuration;
  const {
    logo,
    textColor,
    width,
    height,
    placeholder,
    chatBotImg,
    chatMessageBackground,
    userImg,
    userMessageBackground,
  } = applyDefaultValueTo(optionalConfig);
  const [isOpen, setIsOpen] = useState(false);

  const { chatBotMessages, setChatbotMessages, isTyping, setInput } = useOpenAI(
    API_KEY,
    config
  );

  const handleSend = (message: string) => {
    const newMessage: ChatBotMessage = { role: "user", content: message };
    setChatbotMessages([...chatBotMessages, newMessage]);
    setInput(newMessage);
  };

  return (
    <>
      {isOpen ? (
        <div style={{ position: "relative", height: height, width: width }}>
          <MainContainer>
            <ChatContainer>
              <MessageList
                scrollBehavior="smooth"
                typingIndicator={
                  isTyping ? (
                    <TypingIndicator content={`${config.name} is typing...`} />
                  ) : null
                }
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
              <MessageInput placeholder={placeholder} onSend={handleSend} />
            </ChatContainer>
          </MainContainer>
          <button onClick={() => setIsOpen(!isOpen)}>Close Chat!X</button>
        </div>
      ) : (
        <div>
          <button
            style={{
              background: `url(${logo})`,
              backgroundSize: "cover",
              width: "30px",
              height: "30px",
            }}
            onClick={() => setIsOpen(!isOpen)}
          >
            Click here
          </button>
        </div>
      )}
    </>
  );
};

export default ChatBot;
