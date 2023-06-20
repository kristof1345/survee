import express from "express";
import User from "../model/User";
import Survey from "../model/Survey";

const router = express.Router();

router.post("/new", async (req, res) => {
  const { UID, ID } = req.body;

  try {
    let survey = new Survey({
      UID: UID,
      SurveyID: ID,
      Title: "New Survee",
      SurveyContent: [],
      SurveyResults: [],
    });

    await survey.save();

    let user = await User.findOne({ UID });
    user.Surveys.push(ID);

    await user.save();

    res.json(survey);
  } catch (error) {
    console.error(error);
    res.status(500).json("Server error");
  }
});

router.post("/get", async (req, res) => {
  const { UID, ID } = req.body;

  try {
    let survey = await Survey.findOne({ SurveyID: ID });

    if (survey) {
      res.json(survey);
    } else {
      res.json("Wasn't able to find survey");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("Server error");
  }
});

export default router;
