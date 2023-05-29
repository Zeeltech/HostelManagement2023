import React from "react";
import index from "../assets/Index.jpg";

function IndexPage() {
  return (
    <div className="workspace give_height ">
      <div className="relative">
        <img src={index} alt="index" className="overlay-image -z-50" />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      </div>
    </div>
  );
}

export default IndexPage;
