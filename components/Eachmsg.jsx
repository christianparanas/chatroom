import { useState, useEffect } from "react";

function EachMsg({ msg }) {
  const [categ, setCateg] = useState();

  useEffect(() => {
    if (msg.username === localStorage.getItem("username")) {
      setCateg("each ownMsg");
    } else {
      setCateg("each otherMsg");
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
      </div>
      <div className="msgD">
        <div className="date">{msg.date}</div>
        <div className="time">{msg.time}</div>
      </div>
    </div>
  );
}

export default EachMsg;
