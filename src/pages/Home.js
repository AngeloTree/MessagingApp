import React from "react";
import { useState } from "react";

const Home = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessages] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessages([...messages, newMessage]);
    setNewMessages("");
  };

  return (
    <div>
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
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Home;
