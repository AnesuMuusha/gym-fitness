import { useState } from "react";
import Footer from "./Footer";

const Contact=()=> {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("Please fill out all the fields.");
      return;
    }else{   
      alert("Form successfully submitted");
      resetForm();}
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className=" m-4 p-1 md:flex items-center justify-center h-screen bg-gray-100 rounded md:text-l lg:text-1xl xl:text-4xl">
    <div className="">
       <div className="mt-14">
       </div>
       <div className="md:flex m-8 ">
        <div className="flex items-center mr-10">
<h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>
</div>

       <div>
    <form onSubmit={handleSubmit} id="Contact" className="bg-gray-100 p-6 rounded-lg ">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
          Message
        </label>
        <textarea
          id="message"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-gray-800 hover:bg-gray-600 p-1 border rounded b text-white cursor-pointer"
      >
        Send
      </button>
      <Footer/>
    </form>
    </div></div></div>

    </div>
  );
}

export default Contact;