
import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import axios from "axios";
//import {Router} from "react"

function App() {
  const [Data,SetData]=useState([])
  useEffect(()=>{
axios.get("http://localhost:8000/message/get/sync").then((res)=>{
  console.log(res.data);
  SetData(res.data)
})
  },[])

  useEffect(()=>{
    var pusher = new Pusher('cab4578339f56847755b', {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newmessage) {
      alert(JSON.stringify(newmessage));
      SetData([...Data,newmessage]);
    });


      return()=>{
channel.unbind_all();
channel.unsubscribe();
      }

   
  },[Data])
  console.log(Data)
  return (
    <div className="app">
      <div className='app_body'>
      
        <Sidebar/>
      <Chat data={Data} />
       
     

      </div>
    
    </div>
  );
}

export default App;
