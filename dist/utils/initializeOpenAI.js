import OpenAI from "openai";
const initializeOpenAI = (API_KEY) => {
    const opts = {
        apiKey: API_KEY,
        dangerouslyAllowBrowser: true,
    };
    return new OpenAI(opts);
};
export default initializeOpenAI;
