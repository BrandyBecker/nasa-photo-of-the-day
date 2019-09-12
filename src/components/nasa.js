import React from "react";
import moment from "moment";
import styled from "styled-components";
//----------------------------------------------------------
function Nasa(props) {
  //---------------------------------------------------------
  const NASA = styled.div`
    width: 75%;

    background-image: url("https://images.unsplash.com/photo-1515825838458-f2a94b20105a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80");
  `;
  const TITLE = styled.div`
    font-size: 2rem;
    text-align: center;
    background-color: lightgrey;
    padding: 2%;
    color: black;
    font-style: italic;
  `;
  const DATE = styled.div`
    text-align: center;
    background-color: white;
    padding: 0.5%;
  `;
  const EXPLANATION = styled.div`
    text-indent: 15px;
    padding: 1.5rem;
    background-color: white;
  `;

  //---------------------------------------------------------
  return (
    <>
      <NASA>
        <TITLE>⭐ " {props.title} " ⭐</TITLE>
        <DATE>{moment(props.date).format("MMMM Do YYYY, h:mm:ss a")}</DATE>

        {props.media_type === "video" ? (
          //is media type a video?
          //if so,

          <iframe
            className="card-img-top"
            width="420"
            height="315"
            src={props.src}
            title="temp"
          />
        ) : (
          //use image,
          // if not,
          //use video
          <img
            className="card-img-top"
            src={props.src}
            width="420"
            height="400"
            alt="Nasa Photo Of The Day"
          />
        )}

        <EXPLANATION>{props.explanation}</EXPLANATION>
      </NASA>
    </>
  );
}

export default Nasa;
