import { Margin } from "@mui/icons-material";
import { useEffect, useState } from "react";

export default function Home() {
  const [input, setInput] = useState([]);
  const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInput(data.meals));
  }, []);

  function Togole(props) {
    const { children } = props;
    const [show, setShow] = useState(false);
    return (
      <div>
        {show ? children : null}{" "}
        <button
          className="shadow-md rounded px-2 bg-green-300"
          onClick={() => {
            setShow(!show);
          }}
        >
          show
        </button>
      </div>
    );
  }

  return (
    <div>
      {input.map((data) => {
        return (
          <div style={{ display: "grid" }}>
            {
              <div className="shadow-md  rounded px-2">
                <img src={data.strMealThumb} alt="foodImage" />
              </div>
            }
            <div
              style={{
                display: "grid",
                color: "yellow",
                position: "absolute",
                width: "450px",
                marginLeft: "100px",
                marginTop: "200px"
              }}
              className="bg-red-000 rounded border shadow-md px-2 "
            >
              <h1> DishName: {data.strMeal}</h1>
              <p> Category: {data.strCategory}</p>
              <p>
                {" "}
                <Togole> {data.strInstructions} </Togole>
              </p>
              {/* <button className="shadow-md rounded px-2 bg-green-300">
                Detail
              </button> */}
              <p>
                {" "}
                Youtube : <a href={data.strYoutube}>click here</a>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
