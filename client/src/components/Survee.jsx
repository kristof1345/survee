import React from "react";
import { Link } from "react-router-dom";

const Survee = ({ survey }) => {
  const copyURL = async (e) => {
    let text = e.target.innerText;
    try {
      await navigator.clipboard.writeText(text);
      console.log("Content copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="survey">
      <Link to={`survey/${survey.SurveyID}`}>
        <h2 className="survey-title">{survey.Title}</h2>
      </Link>
      <div>
        Share your survey with others:
        <br />
        <button
          className="copy-btn"
          onClick={(e) => copyURL(e)}
        >{`http://localhost:3000/${survey.SurveyID}`}</button>
      </div>
    </div>
  );
};

export default Survee;
