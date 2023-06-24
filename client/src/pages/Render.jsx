import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Interpret from "../components/Interpret";

const Render = () => {
  const [survey, setSurvey] = useState();
  let { id } = useParams();

  useEffect(() => {
    getSurvey();
  }, []);

  const getSurvey = () => {
    axios
      .post("http://localhost:3000/survey/get", {
        ID: id,
      })
      .then((res) => setSurvey(res.data));
  };

  const submitSurvey = () => {
    let results = [];
    let forms = document.getElementsByClassName("survey-form");

    [...forms].map((form, i) => {
      let obj = {};
      const question = form.querySelector(".form-title").textContent;

      obj.question = question;

      if (form.dataset.type === "fillin") {
        const answer = form.querySelector(".form-answer").innerHTML;

        obj.answer = answer;
      }

      obj.type = form.dataset.type;

      results.push(obj);
    });

    axios
      .patch("http://localhost:3000/survey/submit", {
        ID: id,
        Results: results,
      })
      .then((res) => console.log(res.data));
  };

  return (
    <div className="client-main">
      <div className="client-survey">
        <h1 className="cs-title">{survey ? survey.Title : null}</h1>
        <div className="cs-content">
          {survey?.SurveyContent.length > 0
            ? survey.SurveyContent.map((form, i) => (
                <Interpret form={form} key={i} way={"viewable"} />
              ))
            : null}
        </div>
        <button className="submit-survey" onClick={() => submitSurvey()}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Render;
