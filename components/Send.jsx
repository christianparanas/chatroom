import { useState } from "react";
import firebase from "../firebase";

function Send() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (message.length === 0 && message === "") {
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
          className="input2"
          type="text"
          placeholder="Write message here"
          onChange={(e) => setMessage(e.target.value.trim())}
        />
        <input className="sub2" type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Send;
