function createOpenAiTypeMessage(message) {
    if (typeof message === "string") {
        return { role: "user", content: message };
    }
    else {
        const { role, content } = message;
        if (content === null)
            throw new Error("Content from ChatGPT was 'null'...");
        return { role: role, content: content };
    }
}
export default createOpenAiTypeMessage;
