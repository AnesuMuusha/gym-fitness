import React from "react";
import gymImage from "./images/home1.jpg" ;
import Footer from "./Footer";

function Home() {
  return (
    <>
  
      <div className="flex flex-col m-5 w-5/5 md:text-1xl md:flex md:flex-row lg:text-2xl xl:text-4xl" id="Home">
        <img src={gymImage} alt="Gym" className="md:m-4 md:w-1/2" />
        <div className="flex flex-col items-center">
          <h1 className="font-serif text-bold font-bold text-lg  mt-2 md:text-3xl lg:text-4xl xl:text-6xl">Welcome to Fit Gym</h1>
          <p className="my-4 px-3 text-gray-800">
            We are dedicated to providing a
            world-class fitness experience for everyone, from beginners to
            seasoned athletes. Whether you're
            looking to lose weight, build muscle, or simply improve your overall
            health and wellness, we have everything you need to get started.{" "}
          </p>
          <button className="bg-gray-800 hover:bg-gray-600 p-1 border rounded b text-white cursor-pointer">
           <a href="#Explore"> Learn More</a>
          </button>
          
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
