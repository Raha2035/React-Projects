import Friend from "./Friend";

const FriendsList = ({ friendsList, onSelectedFriend, selectedFriend }) => {
  return (
    <ul>
      {friendsList.map((friend) => (
        <Friend
          friend={friend}
          onSelectedFriend={onSelectedFriend}
          selectedFriend={selectedFriend}
          key={friend.id}
        />
      ))}
    </ul>
  );
};

export default FriendsList;
