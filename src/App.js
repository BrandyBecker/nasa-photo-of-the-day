import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Nasa from "./components/Nasa.js";
import axios from "axios";
import "./index.css";
import galactic from "./content/galactic.jpg";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import NasaLoader from "./components/NasaLoader";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <NasaLoader />
    </>
  );
}

export default App;
