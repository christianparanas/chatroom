import { useState, useEffect } from "react";
import firebase from "../firebase";

import Send from "../components/Send";
import Eachmsg from "../components/Eachmsg";

function Room() {
  const [messages, setMessages] = useState([]);

  const getMessages = () => {
    firebase.child("messages").on("value", (snapshot) => {
      let list = [];

      for (let chat in snapshot.val()) {
        let obj = {
          id: chat,
          username: snapshot.val()[chat].username,
          message: snapshot.val()[chat].message,
          date: snapshot.val()[chat].date,
        };
        list.push(obj);
      }
      setMessages(list);
    });
  };

  useEffect(() => {
    getMessages();
  }, []);


  return (
    <div className="room">
      <div className="title">Group Chat</div>
      <div className="messages" id="messages">
        {messages.map((msg) => {
          return <Eachmsg msg={msg} />;
        })}
      </div>
      <Send />
    </div>
  );
}

export default Room;
