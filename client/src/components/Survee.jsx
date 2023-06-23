import React from "react";
import { Link } from "react-router-dom";

const Survee = ({ survey }) => {
  return (
    <Link className="survey" to={`survey/${survey.SurveyID}`}>
      <h2 className="survey-title">{survey.Title}</h2>
    </Link>
  );
};

export default Survee;
