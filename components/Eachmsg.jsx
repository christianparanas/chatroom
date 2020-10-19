import { useState, useEffect } from "react";

function Eachmsg({ msg }) {
  const [categ, setCateg] = useState();

  useEffect(() => {
    if (msg.username === localStorage.getItem("username")) {
      setCateg("each ownMsg");
    } else {
      setCateg("each");
    }
  }, []);

  return (
    <div className={categ}>
      <img
        src={`https://avatars.dicebear.com/api/gridy/${msg.username}.svg`}
      ></img>
      <div className="cre">
        <div className="name">{msg.username}</div>
        <div className="msg">{msg.message}</div>
        <div className="date">{msg.time}</div>
      </div>
    </div>
  );
}

export default Eachmsg;
