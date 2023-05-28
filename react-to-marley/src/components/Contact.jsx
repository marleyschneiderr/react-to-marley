import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#2d00f7] flex justify-center items-center p-4"
    >
      <form method="POST" id="contactme" action="https://getform.io/f/06216a09-0dc6-43dd-be70-5a3164138d74" className="flex flex-col max-w-[700px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#E500A4] text-white">
            Contact Me
          </p>
          <p className="text-white py-5">Fill out the form below to contact me - marleysue@gmail.com</p>
        </div>
        <input className="bg-white p-2" type="text" placeholder="Your Name" name="name" />
        <input className="my-4 p-2 bg-white" type="email" placeholder="example.email@example.com" name="email" />
        <textarea className="bg-white p-2" name="message" rows="10" placeholder="Your Message Here"></textarea>
        <button className="text-white border-2 hover:bg-[#E500A4] hover:border-[#E500A4] px-4 py-3 my-8 mx-auto flex items-center">Let's Talk</button>
      </form>
    </div>
  );
};

export default Contact;
