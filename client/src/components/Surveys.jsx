import { useEffect, useState } from "react";
import axios from "axios";
import Survee from "./Survee";

const Surveys = ({ UID }) => {
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    getSurveys();
  }, []);

  const getSurveys = () => {
    axios
      .post("http://localhost:3000/survey/all", {
        UID: UID,
      })
      .then((res) => setSurveys(res.data));
  };

  console.log(surveys);

  return (
    <div id="surveys">
      {/* {surveys
        ? surveys.map((survey, i) => {
            <Survee key={i} survey={survey} />;
          })
        : "wut"} */}
      {surveys.map((survey, i) => (
        <Survee key={i} survey={survey} />
      ))}
    </div>
  );
};

export default Surveys;
