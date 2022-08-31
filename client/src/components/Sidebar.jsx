import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import { Avatar, IconButton } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SidebarChat from "./SidebarChat";


const Wrapper = styled.div`
width:30%;

  .sidebar {
    display: flex;
    flex-direction: column;
    width:100%;
    //flex: 0.35;
    height: 100vh;
  }
  .sidebar_header {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: #f0f2f5;

    border-right: 1px solid lightgray;
  }
  .sidebar_headerRight {
    margin-left: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 10vw;
  }
  .sidebar_headerRight > .MuiSvgIcon-root {
    font-size: 24px !important;
  }
  .sidebar_search {
    display: flex;
    align-items: center;
    background-color: #f6f6f6;
    width: 94.5%;
    height: 39px;
    padding: 10px;
  }

  .sidebar_searchContainer > .MuiSvgIcon-root {
    color: gray;
    font-size: 18px;
    margin-top: 2px;
    margin-left: 10px;
  }
  .sidebar_searchContainer > input {
    border: none;
    padding: 10px 0px;
    outline-width: 0;
    padding-left: 5px;
    margin-left: 10px;
  }
  .sidebar_searchContainer {
    display: flex;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 35px;
    border-radius: 20px;
  }
  .sidebar_chats{
    width:100%;

  flex:1;
  overflow-y: scroll;
    background-color:white;

  }
`;
const Sidebar = () => {
 //const [rooms,Setrooms]=useState([]);

//  useEffect(()=>{
// db.collection("rooms").onSnapsort((snapsort)=>{
//   Setrooms(snapsort.docs.map((doc)=>{
//   return  ({
// id:doc.id,
// data:doc.data()
//     })
//   }))
// })
//  },[])
  return (
   
      <Wrapper>
        <div className="sidebar">
          <div className="sidebar_header">
            <Avatar src="image.jpg" />
            <div className="sidebar_headerRight">
              <IconButton>
                <DonutLargeIcon />
              </IconButton>
              <IconButton>
                <ChatIcon />
              </IconButton>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </div>
          </div>
          <div className="sidebar_search">
            <div className="sidebar_searchContainer">
              <SearchOutlinedIcon />
              <input placeholder="Search or start new chat" type="text" />
            </div>
          </div>

          <div className="sidebar_chats">
            <SidebarChat addNewChat/>
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
          </div>
        </div>
      </Wrapper>
 
  );
};

export default Sidebar;
