import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import firebase from "../firebase";

import Send from "../components/Send";
import Eachmsg from "../components/Eachmsg";
import Nav from "../components/Nav";

function Room() {
  const [messages, setMessages] = useState([]);
  const router = useRouter();
  const messagesEndRef = useRef(null);

  const getMessages = () => {
    firebase.child("messages").on("value", (snapshot) => {
      let list = [];

      for (let chat in snapshot.val()) {
        let obj = {
          id: chat,
          username: snapshot.val()[chat].username,
          message: snapshot.val()[chat].message,
          date: snapshot.val()[chat].date,
          time: snapshot.val()[chat].time,
        };
        list.push(obj);
      }
      setMessages(list);
    });
  };

  const checkUsername = () => {
    if (localStorage.getItem("username") === null) {
      router.push("/");
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
 
  useEffect(() => {
    checkUsername();
    getMessages();
    getDate()
    scrollToBottom()
  }, []);
  
  function getDate() {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();
    return time;
  }

  return (
    <div className="room">
      <Nav />
      <div className="messages" id="messages">
        <div className="sepdate">Created on Oct 19, 2020.</div>
        {messages.map((msg, key) => {
          return (
            <div key={key}>
              <Eachmsg msg={msg} />
            </div>
          )
        })}
        <div ref={messagesEndRef} />
      </div>
      {/* <Send /> */}
      <Send triggerScroll={scrollToBottom} />
    </div>
  );
}

export default Room;
