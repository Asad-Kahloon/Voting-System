import React, { useState } from "react";
import "./contact.css";
const Contact = () => {
  const [data, setData] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  });
  let Name, Value;
  const input = (e) => {
    Name = e.target.name;
    Value = e.target.value;
    setData({ ...data, [Name]: Value });
  };
  const sendData = async (e) => {
    const { Name, Email, Subject, Message } = data;
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json",
      },
      body: JSON.stringify({
        Name,
        Email,
        Subject,
        Message,
      }),
    };

    const send = await fetch(
      "https://react-contactform-f5655-default-rtdb.firebaseio.com/Message.json",
      options
    );
    console.log(send);
    if (send) {
      alert("Message Sent !");
    } else {
      alert("something went wrong");
    }
  };
  return (
    <>
      <div className="contact">
        <div className="container">
          <div className="box">
            <h2>Send Your Queries</h2>
            <form method="POST" className="form">
              <input
                type="text"
                name="Name"
                value={data.Name}
                placeholder="Name*"
                onChange={input}
              ></input>
              <input
                type="text"
                name="Email"
                value={data.Email}
                placeholder="E-mail*"
                onChange={input}
              ></input>
              <input
                type="text"
                name="Subject"
                value={data.Subject}
                placeholder="Subject*"
                onChange={input}
              ></input>
              <textarea
                placeholder="Message*"
                name="Message"
                value={data.Message}
                onChange={input}
              ></textarea>
              <button type="submit" onClick={sendData}>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
