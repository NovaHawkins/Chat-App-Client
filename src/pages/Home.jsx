import React, { useState } from 'react'

import Header from '../components/Header'
import ContactsList from '../components/ContactsList'
import OpenChat from '../components/OpenChat'


export default function Home({ user, logout }) {
  const [openChat, setOpenChat] = useState()

  return (
    <>
      <Header username={user.username} logout={logout} Link={'/create-room'} icon={'bi-person-plus-fill'} />
      <div id='chats'>
        <ContactsList user={user} setOpenChat={setOpenChat} />
        {openChat ?
          <OpenChat user={user} openChat={openChat} />
          :
          <div id='openChat'>
            <h2>Select a user or room to start a chat</h2>
          </div>  
        }
      </div>
    </>
  )
}