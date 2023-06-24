import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Interpret from "../components/Interpret";

const Editor = ({ UID }) => {
  const [survey, setSurvey] = useState();
  let { id } = useParams();
  console.log(survey);

  useEffect(() => {
    getSurvey();
  }, []);

  const getSurvey = () => {
    axios
      .post("http://localhost:3000/survey/get", {
        UID: UID,
        ID: id,
      })
      .then((res) => setSurvey(res.data));
  };

  const saveSurvey = () => {
    let finalContent = [];
    const title = document.getElementById("st-content");
    const content = document.getElementById("survey-content");

    const forms = content.getElementsByClassName("survey-form");

    [...forms].map((form, i) => {
      let obj = {};

      obj.type = form.dataset.type;
      obj.question = form.querySelector(".form-title").innerHTML;

      finalContent.push(obj);
    });

    axios
      .patch("http://localhost:3000/survey/update", {
        ID: id,
        Title: title.textContent,
        Content: finalContent,
      })
      .then((res) => console.log(res.data));
  };

  const addFillIn = () => {
    const content = document.getElementById("survey-content");

    let form = document.createElement("div");
    form.classList.add("survey-form");
    form.dataset.type = "fillin";

    let question = document.createElement("span");
    question.classList.add("form-title");
    question.contentEditable = true;
    form.append(question);

    let answer = document.createElement("span");
    answer.classList.add("form-answer");
    form.append(answer);

    content.append(form);
  };

  return (
    <div id="random-div">
      {survey === "Wasn't able to find survey" && (
        <div>Wasn't able to find survey</div>
      )}
      <div id="editor">
        <Link id="back-btn" to={"/"}>
          Back to Dashboard
        </Link>
        <div id="survey-content-holder">
          <div id="survey-editor">
            <div
              id="survey-title"
              contentEditable={true}
              suppressContentEditableWarning={true}
            >
              {survey?.Title ? <h1 id="st-content">{survey.Title}</h1> : null}
            </div>
            <div id="survey-content">
              {survey?.SurveyContent.length > 0
                ? survey.SurveyContent.map((form, i) => (
                    <Interpret form={form} key={i} way={"editable"} />
                  ))
                : null}
            </div>
          </div>
        </div>
        <div id="editor-sidenav">
          <button className="save-survey" onClick={() => saveSurvey()}>
            Save
          </button>
          <div className="editor-components">
            <button className="comp-btn" onClick={() => addFillIn()}>
              Add Fill In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
