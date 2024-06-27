import React from "react";

const Body = () => {
  return (
    <div className="space-y-4 lg:flex">
      <div className="flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end lg:overflow-hidden">
        <img
          src="./assets/Blue-Shape.svg"
          alt="blue-shape-img"
          className="-rotate-[45deg] h-64 md:h-72 lg:h-[450px] lg:overflow-hidden"
        />
        <img
          src="./assets/Pink-Shape.svg"
          alt="pink-shape-img"
          className="absolute -rotate-[30deg] h-64 md:h-72 lg:h-[450px] lg:overflow-hidden"
        />
        <img
          src="./assets/Purple-Shape.svg"
          alt="purple-shape-img"
          className="absolute -rotate-[15deg] h-64 md:h-72 lg:h-[450px] lg:overflow-hidden"
        />
        <img
          src="./assets/Hero-Model.png"
          alt="hero-img"
          className="absolute h-64 md:h-72 lg:h-[450px] lg:overflow-hidden"
/>
      </div>

      <div className="space-y-4 lg:flex-1 lg:order-1 lg:space-y-10">
        <h1 className="text-5xl font-bold font-playfair leading-tight">Host your website in less than 5 minutes.</h1>
        <p className="font-lato text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore velit
          ratione ducimus ex sapiente placeat quaerat facere vel at sed?
        </p>
        <form action="" className="flex flex-col gap-4 md:flex-row">
          <input className="rounded-md px-4 py-3 placeholder:text-gray-400" type="email" placeholder="Enter your email address" />
          <button className="rounded-md px-4 py-3 bg-blue-400 text-white hover:bg-blue-600">Joint waitlist now!</button>
        </form>
        <div className="flex gap-2 space-y-2">
          <img src="./assets/Checkmark.svg" alt="checkmark" />
          <p className="font-lato text-gray-400">Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
