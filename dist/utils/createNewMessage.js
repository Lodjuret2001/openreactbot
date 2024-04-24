function createNewMessage(message) {
    const { role, content } = message;
    if (content === null)
        throw new Error("Content from ChatGPT was 'null'...");
    return { role: role, content: content };
}
export default createNewMessage;
