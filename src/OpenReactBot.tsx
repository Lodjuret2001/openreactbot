import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { useState } from "react";
import useOpenAI from "./hooks/useOpenAI.js";
import applyDefaultValueTo from "./utils/applyDefaultValuesTo.js";
import { OpenReactBotProps, ChatBotMessage } from "./types/orbTypes.js";
import ChatBotContainer from "./components/ChatBotContainer.jsx";
import CloseChatBot from "./components/CloseChatBot.jsx";
import LogoButton from "./components/LogoButton.jsx";
import {
  Avatar,
  MainContainer,
  ChatContainer,
  MessageList,
  MessageInput,
  Message,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

const OpenReactBot = ({
  API_KEY,
  AIConfig,
  stylesConfig,
}: OpenReactBotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    chatBotMessages,
    setChatbotMessages,
    isTyping,
    setInput,
    setIsInitilalized,
  } = useOpenAI(API_KEY, AIConfig);
  const styles = applyDefaultValueTo(stylesConfig);

  const handleSetIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = (message: string) => {
    const newMessage: ChatBotMessage = { role: "user", content: message };
    setChatbotMessages([...chatBotMessages, newMessage]);
    setIsInitilalized(true);
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
                    <TypingIndicator
                      className=".orb-typing--indicator"
                      content={`${styles.name} is typing...`}
                    />
                  ) : undefined
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
                      avatarPosition="cl"
                    >
                      <Avatar
                        key={i}
                        src={
                          chat.role === "assistant"
                            ? styles.chatBotImg
                            : styles.userImg
                        }
                      />
                    </Message>
                  );
                })}
              </MessageList>
              <MessageInput
                placeholder={styles.placeholder}
                onSend={handleSend}
                autoFocus={true}
                attachButton={false}
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

export default OpenReactBot;
