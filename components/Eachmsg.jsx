import React from "react";

function Eachmsg({ msg }) {
  return (
    <div className="each">
      <img src={`https://avatars.dicebear.com/api/gridy/${msg.username}.svg`}></img>
      <div className="cre">
        <div className="name">{msg.username}</div>
        <div className="msg">{msg.message}</div>
        <div className="date">{msg.date}</div>
      </div>
    </div>
  );
}

export default Eachmsg;
