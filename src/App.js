import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import { FormControl,  Input } from "@material-ui/core";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase/compat/app";
//import FlipMove from 'react-flip-move';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, []);


  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})));
      });
  }, [])

 
  const sendMessage = (event) => {
    event.preventDefault();

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt="M"/>
      <h1>Dafirm Messenger </h1>
      <h2>Welcome {username}</h2>

      <form className="app__form">
        <FormControl className = "app__formControl">  
          <Input className= "app__input" placeholder = 'Enter a message...' value={input} onChange={event => setInput(event.target.value)}/>
          <IconButton className = "app__iconButton" disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage} >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      
        {
        messages.map(({id, message}) => (
          <Message key={id} username={username} message={message} />
        ))}
      
    </div>
  );
}

export default App;
