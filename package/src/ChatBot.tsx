import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { useState } from "react";
import useOpenAI from "./hooks/useOpenAI.js";
import applyDefaultValueTo from "./utils/applyDefaultValuesTo.js";
import { ChatBotProps, ChatBotMessage } from "./types/chatBotTypes.js";
import ChatBotContainer from "./components/ChatBotContainer.js";
import LogoButton from "./components/LogoButton.js";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  MessageInput,
  Message,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import CloseChatBot from "./components/CloseChatBot.js";

const ChatBot = ({ configs }: ChatBotProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { API_KEY, config, stylesConfig } = configs;
  const styles = applyDefaultValueTo(stylesConfig);

  const { chatBotMessages, setChatbotMessages, isTyping, setInput } = useOpenAI(
    API_KEY,
    config
  );

  const handleSetIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = (message: string) => {
    const newMessage: ChatBotMessage = { role: "user", content: message };
    setChatbotMessages([...chatBotMessages, newMessage]);
    setInput(newMessage);
  };

  return (
    <>
      {isOpen ? (
        <ChatBotContainer styles={styles}>
          <CloseChatBot handleSetIsOpen={handleSetIsOpen} />
          <MainContainer>
            <ChatContainer>
              <MessageList
                scrollBehavior="smooth"
                typingIndicator={
                  isTyping ? (
                    <TypingIndicator content={`${styles.name} is typing...`} />
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
              <MessageInput
                placeholder={styles.placeholder}
                onSend={handleSend}
                autoFocus={true}
              />
            </ChatContainer>
          </MainContainer>
        </ChatBotContainer>
      ) : (
        <LogoButton styles={styles} handleSetIsOpen={handleSetIsOpen} />
      )}
    </>
  );
};

export default ChatBot;
