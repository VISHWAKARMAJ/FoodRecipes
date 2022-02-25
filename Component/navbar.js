import React from "react";

export default function Navbar() {
  return (
    <div className="bg-red d-grid col-2 row-2 shadow-md rounded px-2 pt-2 pb-2 mb-4">
      {/* <button className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
    
      </button> */}
      <p>
        {" "}
        <img
          src="https://www.themealdb.com/images/ingredients/Lime.png"
          alt=""
          style={{ height: "50px" }}
        />{" "}
      </p>
      <p> </p>
    </div>
  );
}
