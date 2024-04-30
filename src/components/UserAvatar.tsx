const UserAvatar = (userAvatar: string) => {
  return (
    <div>
      <img style={{ width: "30px", height: "30px" }} src={userAvatar} />
    </div>
  );
};

export default UserAvatar;
