import axios from "axios";
import { nanoid } from "nanoid";

const SideNav = ({ UID }) => {
  const newSurvey = () => {
    const ID = nanoid(12);
    axios
      .post("http://localhost:3000/survey/new", {
        UID: UID,
        ID: ID,
      })
      .then((res) => console.log(res.data));
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
