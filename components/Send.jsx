import { useState } from "react";
import firebase from "../firebase";

function Send() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (message.length === null) {
      console.log("Input something");
      return;
    }

    sendToFire();
  };

  function sendToFire() {
    const datex = new Date(Date.now());
    let data = {
      username: localStorage.getItem("username"),
      message: message,
      date: datex.toDateString(),
    };

    firebase.child("messages").push(data, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }

  return (
    <div className="send">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write message here"
          onChange={(e) => setMessage(e.target.value)}
        />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Send;
