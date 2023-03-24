import React from "react";
import gymImage from "./gym.jpg";
import Footer from "./Footer";
import NavBar from "./NavBar";

function GymHomepage() {
  return (
    <>
    <NavBar/>
      <div className="flex flex-col m-5 w-5/5">
        <img src={gymImage} alt="Gym" className="" />
        <div className="flex flex-col items-center">
          <h1 className="font-serif text-bold font-bold text-lg  mt-2">Welcome to Fit Gym</h1>
          <p className="my-4 px-3 text-gray-800">
            We are dedicated to providing a
            world-class fitness experience for everyone, from beginners to
            seasoned athletes.Whether you're
            looking to lose weight, build muscle, or simply improve your overall
            health and wellness, we have everything you need to get started.{" "}
          </p>
          <button className="bg-gray-800 hover:bg-gray-600 p-1 border rounded b text-white cursor-pointer">
            Learn More
          </button>
        </div>
        <div></div>
      </div>
      <Footer />
    </>
  );
}

export default GymHomepage;
