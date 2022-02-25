 import React, { useEffect, useState } from "react";
export default function Recipes() {
  const [input, setInput] = useState([]);
  useEffect(() => {
    const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInput(data.meals));
  }, []);
  return (
    <div>
      <h1
        style={{ textAlign: "center", height: "45px", marginTop: "20px" }}
        className="bg-red-500 shadow-md border center rounded px-2"
      >
        here is more about Recipes
      </h1>
      {input.map((data) => {
        return (
          <div>
            {data.strMeal}
            <div>
              {" "}
              <img src="data.strMealThumb" />{" "}
            </div>
          </div>
        );
      })}
    </div>
  );
}
