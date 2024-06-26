# OpenReactBot

[![Github](https://img.shields.io/badge/open_source-hi?logo=github)](https://github.com/Lodjuret2001/openreactbot) [![TypeScript](https://img.shields.io/badge/typescript-blue?style=flat-square&logo=typescript&labelColor=white)](https://www.typescriptlang.org/) [![OpenAI](https://img.shields.io/badge/OpenAI-black?style=flat&logo=openai&labelColor=black)](https://openai.com/) [![React](https://img.shields.io/badge/React-blue?style=flat&logo=react&labelColor=black)](https://reactjs.org/) [![EasyToUse](https://img.shields.io/badge/Easy%20to%20use-pink?style=for-the-badge)](#configuration) [![Customize](https://img.shields.io/badge/Customizable-red?style=flat&logo=adobeacrobatreader&labelColor=black)](#3-stylesconfig)

Configure your own ChatBot with OpenAI & customize the UI to your liking! :art::speech_balloon:
The OpenReactBot is an open source project for crafting interactive web chatbots. :man_technologist:

**OpenReactBot brings your ChatBot development at warp speed** :rocket:

## Demo

![GIF DEMO](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnM3NW16bnozOG5wYnp5c3BzYzhnNnEzeXpudWQ2YWFiaDk0dWpnciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xp5kIwTwy2mS0EAasZ/giphy.gif)

## Install

Before you install make sure you have a React Project setup already!

Using yarn:

```sh
yarn add openreactbot
```

Using npm:

```sh
npm install openreactbot
```

## Configuration

1. Create a Configuration object in **src/config** folder [Read more about it here](#configuration-object)

```javascript
import { OpenReactBotProps } from "openreactbot";

const orbConfigs: OpenReactBotProps = {
  API_KEY: import.meta.env.VITE_OPENAI_API_KEY as string,
  AIConfig: {
    prompt: "You are a pirate that will help software developer with debugging their code",
    startMessage: "Hello matey! What can i help you with today? Arrrrrgh!",
    model: "gpt-3.5-turbo",
  },
  stylesConfig: {
    logoWidth: "80px",
    logoHeight: "80px",
  },
};

export default orbConfigs;
```

2. Use your OpenAI [API_KEY](#1-api_key) as a **enviorment variable** and dont hard code it.
3. [AIConfig](#2-aiconfig) properties are mandatory
4. [stylesConfig](#3-stylesconfig) is optional

## Styling

Because the ChatBot interface is using a default styling library you need to create a CSS file to override the default stylings. But dont worry! I got you covered!

1. Create a CSS file in **src/styles** folder
2. Copy the CSS code provided here: [openreactbot.css](https://github.com/Lodjuret2001/openreactbot/blob/main/src/styles/openreactbot.css) into your CSS file.
3. Configure the CSS to your liking or use the default styles.

## Usage

```jsx
import OpenReactBot from "openreactbot";
import orbConfigs from "./config/orbConfigs";
import "./styles/openreactbot.css";

function App() {
  return (
    <>
      <h1>Hello world</h1>
      <OpenReactBot {...orbConfigs} />
    </>
  );
}

export default App;
```

Yeah! Your OpenReactBot is ready to go!

## Documentation

### Configuration Object:

#### 1. API_KEY

- **Description:** This property holds the API key required for authentication and access to the OpenAI service. **Use this as a enviroment variable for safety reasons**. You can obtain a OpenAI API_KEY [HERE](https://platform.openai.com/)

#### 2. AIConfig

- **Description:** This object contains configurations related to the AI model used by OpenReactBot.

  - **prompt:** string
    - The prompt for how the AI should act.
  - **startMessage:** string
    - The initial message displayed when the chatbot is started.
  - **model:** string
    - The name or identifier of the AI model.
    - Theese models can be used: gpt-4, gpt-4-turbo-preview, gpt-3.5-turbo(**default**)

#### 3. StylesConfig

- **Description:** This object contains `optional` configurations for styling the appearance of the OpenReactBot user interface. All of these properties will override the [DEFAULT VALUES](#default-style-values)

  - **name:** string (optional)
    - The name of the chatbot.
  - **logo:** string (optional)
    - The URL or path to the logo image.
  - **logoHeight:** string (optional)
    - The height of the logo image.
  - **logoWidth:** string (optional)
    - The width of the logo image.
  - **logoBorderRadius:** string (optional)
    - The border radius of the logo image.
  - **bottom:** string (optional)
    - The distance of the chatbot from the bottom of the screen.
  - **left:** string (optional)
    - The distance of the chatbot from the left side of the screen.
  - **right:** string (optional)
    - The distance of the chatbot from the right side of the screen.
  - **width:** string (optional)
    - The width of the chatbot.
  - **height:** string (optional)
    - The height of the chatbot.
  - **placeholder:** string (optional)
    - The placeholder text displayed in the input field.
  - **chatBotImg:** string (optional)
    - The URL or path to the chatbot avatar image.
  - **userImg:** string (optional)
    - The URL or path to the user avatar image.

### Default Style Values:

"If [StylesConfig](#3-stylesconfig) object is empty or only some properties are provided, OpenReactBot defaults to the following settings:"

```javascript
const defaultValues = {
  name: "OpenReactBot",
  logo: `${openreactbotIcon}`,
  logoHeight: "100px",
  logoWidth: "100px",
  logoBorderRadius: "50px",
  bottom: "30px",
  left: "",
  right: "20px",
  width: "350px",
  height: "600px",
  placeholder: "Type your message...",
  chatBotImg: `${chatBotIcon}`,
  userImg: `${userIcon}`,
};
```

These defaults ensure that your OpenReactBot instance has a consistent and visually appealing appearance even if specific style configurations are not provided. ✅😄

### Typescript

OpenReactBot is written in TypeScript :blue_book::blue_heart:

### Contributing

If you encounter a bug or error in OpenReactBot, I welcome your contributions to help improve the project. Feel free to clone the repository and submit a pull request with your fixes or enhancements. :hugs::man_technologist:

To contribute:

1. Fork the [repository](https://github.com/Lodjuret2001/openreactbot).
2. Clone the forked repository to your local machine.
3. Create a new branch for your changes: `git branch -c bug-fix`.
4. Make your changes and commit them: `git commit -m "Fix bug or error description"`.
5. Push your changes to your fork: `git push origin bug-fix`.
6. Submit a pull request, describing the issue you've addressed and the changes you've made.

I will review your pull request and work with you to incorporate your changes into the project.

Thank you for helping to improve OpenReactBot! :pray:

### Special THANKS to:

- [ChatScope](https://chatscope.io/) :speech_balloon:
- [OpenAI](https://openai.com/) :robot:
- [React](https://reactjs.org/) :milky_way:

For making this fun package happen!

### Show your support

If you've made an awesome OpenReactBot and you love this package, please :star: this repository!

### License

This project is under the [MIT](./LICENSE.txt) license. :man_judge: