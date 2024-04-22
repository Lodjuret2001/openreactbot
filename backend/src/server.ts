import express, { Express } from "express";
import cors from "cors";

const app: Express = express();
const PORT: number = parseInt(process.env.PORT ?? "3000");

app.use(express.json(), cors());

app.post("/openreactbot/createchat", () => {
    
})


// app.use(errorHandler, afterLogger);

app.listen(PORT, () => {
  console.log(`Listening on PORT:${PORT}...`);
});
