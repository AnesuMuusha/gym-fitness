import { useState } from "react";
import Footer from "./Footer";

function Book() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [classType, setClassType] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      console.log("Booking submitted: ", { date, time, classType });
      alert("Form successfully submitted");
      resetForm();
    }
    
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!name || !email || !message) {
  //     alert("Please fill out all the fields.");
  //     return;
  //   }else{   
  //     alert("Form successfully submitted");
  //     resetForm();}
  // };

  const resetForm = () => {
    setDate("");
    setTime("");
    setClassType("");
  }

  const validate = () => {
    let errors = {};
    if (!date) {
      errors.date = "Please select a date";
    }
    if (!time) {
      errors.time = "Please select a time";
    }
    if (!classType) {
      errors.classType = "Please select a class type";
    }
    return errors;
  }

  return (
    <div className="bg-gray-100 " id="Book">
    <div className="m-4 p-1 md:flex items-center justify-center h-screen bg-gray-100 rounded md:text-1xl lg:text-2xl xl:text-4xl">
     <div className="m-16">
      <div className=" font-bold md:text-2xl lg:text-3xl xl:text-5xl text-gray-800 mb-6">Book a Class</div>

      </div>
      <div>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
            Date
          </label>
          <input
            type="date"
            id="date"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          {errors.date && <p className="text-red-500">{errors.date}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="block text-gray-700 font-bold mb-2">
            Time
          </label>
          <input
            type="time"
            id="time"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          {errors.time && <p className="text-red-500">{errors.date}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="classType" className="block text-gray-700 font-bold mb-2">
            Class Type
          </label>
          <select
            id="classType"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={classType}
            onChange={(e) => setClassType(e.target.value)}
          >
            <option value="">Select a class type</option>
            <option value="yoga">Yoga</option>
            <option value="boxing">Boxing</option>
            <option value="zumba">Zumba</option>
          </select>
          {errors.classType && <p className="text-red-500">{errors.date}</p>}
        </div>
        <button
          type="submit"
          className="bg-gray-800 hover:bg-gray-600 p-1 border rounded b text-white cursor-pointer"
        >
          Book Now
        </button>
      </form>
    </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Book;
