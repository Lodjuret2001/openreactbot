import OpenAI from "openai";
import IConfig from "react-chatbot-kit/build/src/interfaces/IConfig";
import { AIConfig } from "../types/orbTypes";
declare const createRckConfig: (botName: string, headerText: string, chatAvatar: string, userAvatar: string, config: AIConfig, startMessage: string, openai: OpenAI) => IConfig;
export default createRckConfig;
