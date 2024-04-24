const CloseChatBot = ({ handleSetIsOpen }) => {
    const closeChatBotStyles = {
        position: "absolute",
        top: "10px",
        right: "10px",
        zIndex: 100,
        fontSize: "17px",
        background: "transparent",
        border: "none",
    };
    return (<button className="orb-close--chatbot" style={closeChatBotStyles} onClick={() => handleSetIsOpen()}>
      X
    </button>);
};
export default CloseChatBot;
