import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Nasa from "./Nasa.js";
import axios from "axios";
import galactic from "../content/galactic.jpg";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import moment from "moment";

function NasaLoader(props) {
  const [nasa, setNasa] = useState([]);
  const errorNasa = {
    media_type: "image",
    hdurl: galactic,
    title: "Image Not Found, Sorry!",
    explanataion:
      "The image you have requested is not available. Please try on another date!"
  };

  useEffect(() => {
    const date = moment(props.startDate).format("YYYY-MM-DD");
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=uihJcDdtEs43UXDapofhV5WwOs9g2bbWPeUJPbvc&date=${date}`
      )
      .then(res => {
        setNasa(res.data);
      })
      .catch(error => {
        setNasa(errorNasa);
        console.log(error);
      });
    console.log(props.startDate);
  }, [props.startDate]);

  return (
    <div className="APP">
      <div className="SHUTTLE">
        {console.log(nasa)}
        {!nasa.url ? (
          <h3 className="loader">
            <p className="loadText">{" Loading... "}</p>
            <Loader type="Triangle" color="red" height={300} width={300} />
          </h3>
        ) : (
          <Nasa
            date={nasa.date}
            explanation={nasa.explanation}
            src={nasa.url}
            media_type={nasa.media_type}
            title={nasa.title}
          />
        )}
        ;
      </div>
    </div>
  );
}

export default NasaLoader;
