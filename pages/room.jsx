import React from 'react'
import Send from '../components/Send'

function Room() {
   return (
      <div className="room">
         <div className="messages"></div>
         <Send />
      </div>
   )
}

export default Room
