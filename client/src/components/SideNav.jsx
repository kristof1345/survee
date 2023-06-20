import axios from "axios";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const SideNav = ({ UID }) => {
  const navigate = useNavigate();

  const newSurvey = () => {
    const ID = nanoid(12);
    axios
      .post("http://localhost:3000/survey/new", {
        UID: UID,
        ID: ID,
      })
      .then((res) => navigate(`/survey/${res.data.SurveyID}`));
  };

  return (
    <div id="sidenav">
      <button onClick={() => newSurvey()} className="create-survey-btn">
        Create Survey
      </button>
    </div>
  );
};

export default SideNav;
