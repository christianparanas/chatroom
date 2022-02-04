import Head from "next/head";
import { useRouter } from "next/router";

import { useState, useEffect } from "react";

export default function Home() {
  const [username, setUsername] = useState(null);
  const router = useRouter();

  const checkifAlreadyUser = () => {
    if (localStorage.getItem("username") !== null) {
      router.push("/room");
    }
  };

  useEffect(() => {
    checkifAlreadyUser();
  }, []);

  const saveUsername = (e) => {
    e.preventDefault();

    // checks if user input username
    if (username.length === 0 && username === "") {
      alert("Please enter your name");
      return;
    }

    // putting username value to localstorage to use it in database storing, not using any state mgm
    localStorage.setItem("username", username);

    // redirect to room onclick join btn
    router.push("/room");
  };


  return (
    <div className="main-container">
      <Head>
        <title>Chatroom</title>
      </Head>

      <div className="creden">
        <form onSubmit={saveUsername}>
          <label>ChuruchatRoom</label>
          <input
            className="input1"
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setUsername(e.target.value.trim())}
          />
          <input className="sub" type="submit" value="Join Room" />
          <p>built by christianparanas</p>
        </form>
      </div>
    </div>
  );
}
