import { useEffect, useState } from "react";
import "./styles.css";
import Navbar from "../Component/navbar";
import Home from "../Component/home";
import Recipes from "../Component/recipes";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Recipes />
    </>
  );
}
