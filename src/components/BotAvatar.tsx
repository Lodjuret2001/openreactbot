import { ReactElement } from "react";

const BotAvatar = (botAvatar: string): ReactElement => {
  return (
    <div>
      <img src={botAvatar} />
    </div>
  );
};

export default BotAvatar;
