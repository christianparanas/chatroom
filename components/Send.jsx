import { useState, useEffect } from "react";
import firebase from "../firebase";

function Send({ triggerScroll }) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    triggerScroll()
  })

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

    // clear input
    document.getElementById('send').value = ""
  }

  return (
    <div className="send">
      <form onSubmit={handleSubmit}>
        <input
          id="send"
          className="input2"
          autoComplete="off"
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
