const BotAvatar = (chatAvatar: string) => {
  return (
    <div>
      <img style={{ width: "30px", height: "30px" }} src={chatAvatar} />
    </div>
  );
};

export default BotAvatar;
