import { useState } from "react";

function Book() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [classType, setClassType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
    console.log("Booking submitted: ", { date, time, classType });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Book a Class</h2>
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
        </div>
        <button
          type="submit"
          className="bg-gray-800 hover:bg-gray-600 p-1 border rounded b text-white cursor-pointer"
        >
          Book Now
        </button>
      </form>
    </div>
  );
}

export default Book;
