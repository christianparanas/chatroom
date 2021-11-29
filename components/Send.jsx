import { useState, useEffect } from "react";
import firebase from "../firebase";

function Send({ triggerScroll }) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    triggerScroll();
    getTime(new Date());
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (message.length === 0 && message === "") {
      console.log("Input something");
      return;
    }

    sendToFire();
  };

  function getTime(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }

  function sendToFire() {
    const datex = new Date(Date.now());
    let data = {
      username: localStorage.getItem("username"),
      message: message,
      date: datex.toDateString(),
      time: getTime(new Date()),
    };

    firebase.child("messages").push(data, (err) => {
      if (err) {
        console.log(err);
      }
    });

    // clear input
    document.getElementById("send").value = "";
    // clear msg varible
    setMessage("");
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
