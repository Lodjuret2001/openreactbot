const ChatBotContainer = ({ styles, children }) => {
    const { bottom, left, right, height, width } = styles;
    const chatBotContainerStyles = {
        position: "fixed",
        bottom: bottom,
        left: left,
        right: right,
        height: height,
        width: width,
    };
    return <div style={chatBotContainerStyles}>{children}</div>;
};
export default ChatBotContainer;
