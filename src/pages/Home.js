import React from "react";
import { useState, useEffect } from "react";
import "../styles/Home.css";

const Home = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessages] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessages([...messages, newMessage]);
    setNewMessages("");
  };

  const messageSideLogic = () => {
    messages.map((message, index) => {
      console.log(index);
    });
  };

  useEffect(() => {
    messageSideLogic();
  }, [messages]);

  return (
    <div className="container">
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          value={newMessage}
          onChange={(event) => setNewMessages(event.target.value)}
        />
        <button type="submit" className="form-btn">
          Send
        </button>
      </form>
    </div>
  );
};

export default Home;
