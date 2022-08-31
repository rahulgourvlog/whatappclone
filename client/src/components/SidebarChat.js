import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
const SidebarChatSection=styled.div`
.sidebarchat{
display:flex;
padding:20px ;
cursor: pointer;
border-bottom: 1px solid #f6f6f6;


}
.sidebarchat:hover{
    background-color:#ebebeb;
}
.sidebarChat_info{
    font-size: 12px;
    margin-left: 15px;
    margin-bottom: 8px;
}



`
const SidebarChat = ({id,name,addNewChat }) => {
    const createChat=()=>{
        const roomName=prompt("please enter name for chat");
        if(roomName){
            // do some clever datbase stuff 
        }
    }
    const [seed,SetSeed]=useState("");

    useEffect(()=>{
     SetSeed(Math.floor(Math.random()*5000))
    },[])
   
  return !addNewChat ?  (
  
   <SidebarChatSection>
<div className="sidebarchat">
<Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
<div className="sidebarChat_info">
    <h2>Room name</h2>
    <p>This is the last message</p>
</div>


</div>


   </SidebarChatSection>
   
 
  ):(
    <div onClick={createChat} className="sidebarChat">
        <h2>Add new Chat</h2>

    </div>

  )
}

export default SidebarChat