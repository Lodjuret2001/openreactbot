const CloseChatBot = ({ handleSetIsOpen }: Props) => {
  return <button className="react-chatbot-kit-close-btn" onClick={() => handleSetIsOpen()}>X</button>;
};

type Props = {
  handleSetIsOpen: () => void;
};

export default CloseChatBot;
