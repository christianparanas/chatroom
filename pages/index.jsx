import Head from 'next/head'

import { useState } from 'react'

import Send from '../components/Send' 

export default function Home() {
  const [username, setUsername] = useState("");


  const saveUsername = (e) => {
    e.preventDefault();

    if(username.length === 0) return;
    localStorage.setItem('username', username)

    console.log(localStorage.getItem('username'))
  }

  return (
    <div className="main-container">
      <Head>
        <title>Chatroom</title>
      </Head>

      <form onSubmit={saveUsername}>
        <label>Churuchatroom</label>
        <input type="text" placeholder="Enter your name" onChange={(e) => setUsername(e.target.value)} />
        <input type="submit" value="Join" />
      </form>
      <Send />
    </div>
  )
}
