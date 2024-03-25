import React from "react";
import { useState } from "react";
import Button from "./Button";

const FormAddFriend = ({ onAddFriend }) => {
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("https://i.pravatar.cc/48");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name || !imgUrl) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${imgUrl}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName("");
    setImgUrl("https://i.pravatar.cc/48");
  };

  return (
    <form className="form-add-friend" onSubmit={onSubmit}>
      <label>🧍‍♀️Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="">👩‍🦲 Image URL</label>
      <input
        type="text"
        value={imgUrl}
        onChange={(e) => setImgUrl(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;
