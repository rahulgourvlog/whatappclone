import SearchOutlined from "@mui/icons-material/SearchOutlined";
import { Avatar, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";
import axios from "axios";
import { useParams } from "react-router-dom";
const ChatSection = styled.div`
width: 70%;
.chat {
  display: flex;
  flex-direction: column;
  width: 100%;
  height:100vh;
}
.chat_header {
  padding: 20px;
  height: 20px;
  display: flex;
  background-color: #f0f2f5;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
}
.chat_left {
  display: flex;
  margin-left: 20px;
}
.chat_headerInfo {
  padding-left: 20px;
}
.chat_headerInfo > h3 {
  margin-bottom: 3px;
  font-weight: 500;
}
.chat_headerInfo > p {
  color: gray;
}
.chat_body {
  background-image: url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png");
  background-repeat: repeat;
  background-position: center;
  padding: 30px;
  //height: 80vh;
  overflow-y: scroll;
}
.chat_message {
  position: relative;
  font-size: 16px;
  padding: 10px;
  width: 10px;
  width: fit-content;
  border-radius: 10px;
  background-color: #ffffff;
  margin-bottom: 30px;
}

.chat_timestamp {
  margin-left: 10px;
  font-size: xx-small;
}
.chat_name {
  position: absolute;
  top: -15px;
  font-weight: 800;
  font-size: xx-small;
}
.chat_receiver {
  margin-left: auto;
  background-color: #dcf8c6;
}
.chat_footer {
  display: flex;
  
  width: 90%;
  justify-content: space-between;
  align-items: center;
  height: 62px;
  border-top: 1px solid lightgray;
}

.chat_footer > .MuiSvgIcon-root {
  margin-left: 50px;
}
.chat_footer > form {
  display: flex;
  flex: 1;
  //width:
}
.chat_footer > form > input {
  flex: 1;
  border-radius: 30px;
  padding: 10px;
  border: none;
  outline-width: 0;
}
.chat_footer > form > button {
  display: none;
}
.chat_footer > .MuiSvgIcon-root {
  padding: 10px;
  color: gray;
}
`;
const Chat = (props) => {
  const [Input, SetInput] = useState("");

  // const handlechange=(e)=>{
  //   SetInput(e.target.value)
  // }
  console.log(Input);
  const handleclick = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/message/post", {
      message: Input,
      name: "Demo name",
      timestamp: "Date",
      received: false,
    });
     SetInput("")
  };
  const { data } = props;
  const [seed,SetSeed]=useState("");
  // const {roomId}=useParams()
    
  useEffect(()=>{
   SetSeed(Math.floor(Math.random()*5000))
  },[])
  return (
    <ChatSection>
      <div className="chat">
        <div className="chat_header">
          <div className="chat_left">
             <Avatar  src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="chat_headerInfo">
              <h3>Room name</h3>
              <p>Last Seen at ...</p>
            </div>
          </div>
          <div className="chat_headerRight">
            <IconButton>
              <SearchOutlined />
            </IconButton>
            <IconButton>
              <AttachFileOutlinedIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <div className="chat_body">
          {data.map((elem, index) => {
            return (
              <p
                key={index}
                className={`chat_message  ${elem.received && "chat_receiver"}`}
              >
                <span className="chat_name">{elem.name}</span>
                {elem.message}
                <span className="chat_timestamp">{elem.timestamp}</span>
              </p>
            );
          })}

          {/* <p className='chat_message chat_receiver'>
          <span className='chat_name'>Sony</span>
          this is a message
          <span className='chat_timestamp'>{new Date().toUTCString()}</span>
        </p>
        <p className='chat_message'>
          <span className='chat_name'>Sony</span>
          this is a message
          <span className='chat_timestamp'>{new Date().toUTCString()}</span>
        </p>
        <p className='chat_message chat_receiver'>
          <span className='chat_name'>Sony</span>
          this is a message
          <span className='chat_timestamp'>{new Date().toUTCString()}</span>
        </p>
        <p className='chat_message'>
          <span className='chat_name'>Sony</span>
          this is a message
          <span className='chat_timestamp'>{new Date().toUTCString()}</span>
        </p>
           <p className='chat_message'>
          <span className='chat_name'>Sony</span>
          this is a message
          <span className='chat_timestamp'>{new Date().toUTCString()}</span>
        </p> */}
        </div>
        <div className="chat_footer">
          <InsertEmoticonIcon />
          <form>
            <input
              type="text"
             value={Input} onChange={(e) => SetInput(e.target.value)}
              placeholder="Type a message"
            />
          
            <button type="submit" onClick={handleclick}>
              Send a message
            </button>
          </form>
          <MicIcon />
        </div>
      </div>
    </ChatSection>

  );
};

export default Chat;
