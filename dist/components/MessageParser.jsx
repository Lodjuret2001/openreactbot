import React from "react";
const MessageParser = ({ actions, children }) => {
    const parse = (message) => {
        typeof message === "string" && message !== ""
            ? actions.handleSend(message)
            : actions.handleEmptyString();
    };
    return (<div>
      {React.Children.map(children, (child) => {
            return React.cloneElement(child, {
                parse: parse,
                actions,
            });
        })}
    </div>);
};
export default MessageParser;
