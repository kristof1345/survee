import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const Editor = ({ UID }) => {
  const [survey, setSurvey] = useState();
  let { id } = useParams();
  console.log(id);

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
            <div id="survey-title">
              {survey?.Title ? <h1>{survey.Title}</h1> : null}
            </div>
            <div id="survey-content">
              {survey?.SurveyContent.length > 0 ? (
                <></>
              ) : (
                <div>Create your surveys content here</div>
              )}
            </div>
          </div>
        </div>
        <div id="editor-sidenav">
          <button>Save</button>
        </div>
      </div>
    </div>
  );
};

export default Editor;
