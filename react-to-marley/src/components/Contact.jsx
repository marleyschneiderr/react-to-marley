import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (value === "") {
      setError(`Please enter your ${name}`);
    } else {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      setError("Please enter your name");
    } else if (email === "") {
      setError("Please enter your email");
    } else if (message === "") {
      setError("Please enter your message");
    } else {
      // submitting the form - but already being done with getform.io
      document.getElementById("contactme").submit();
    }
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#2d00f7] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        id="contactme"
        action="https://getform.io/f/06216a09-0dc6-43dd-be70-5a3164138d74"
        className="flex flex-col max-w-[700px] w-full"
        onSubmit={handleSubmit}
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#E500A4] text-white">
            Contact Me
          </p>
          <p className="text-white py-5">
            Fill out the form below to contact me - marleysue@gmail.com
          </p>
        </div>
        <input
          className="bg-white p-2"
          type="text"
          placeholder="Your Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={handleBlur}
        />
        <input
          className="my-4 p-2 bg-white"
          type="email"
          placeholder="example.email@example.com"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={handleBlur}
        />
        <textarea
          className="bg-white p-2"
          name="message"
          rows="10"
          placeholder="Your Message Here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onBlur={handleBlur}
        ></textarea>
        {error && (
          <div className="notification">
            <p className="text-red-500">{error}</p>
          </div>
        )}
        <button
          className="text-white border-2 hover:bg-[#E500A4] hover:border-[#E500A4] px-4 py-3 my-8 mx-auto flex items-center"
          type="submit"
        >
          Let's Talk
        </button>
      </form>
      {error && (
        <div
          className="fixed bottom-0 left-0 w-full bg-red-500 text-white py-2 text-center"
        >
          {error}
        </div>
      )}
    </div>
  );
};

export default Contact;

