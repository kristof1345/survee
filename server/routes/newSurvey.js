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
  const { ID } = req.body;

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

router.post("/all", async (req, res) => {
  const { UID } = req.body;

  try {
    let user = await User.findOne({ UID });

    const ids = [...user.Surveys];

    const records = await Survey.find().where("SurveyID").in(ids).exec();

    if (records) {
      res.json(records);
    } else {
      res.json("Wasn't able to find surveys");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("Server error");
  }
});

router.patch("/update", async (req, res) => {
  const { ID, Title, Content } = req.body;

  try {
    let survey = await Survey.findOne({ SurveyID: ID });

    survey.Title = Title;
    survey.SurveyContent = Content;

    await survey.save();

    res.json("Success");
  } catch (error) {
    console.error(error);
    res.status(500).json("Server error");
  }
});

router.patch("/submit", async (req, res) => {
  const { ID, Results } = req.body;

  try {
    let survey = await Survey.findOne({ SurveyID: ID });

    survey.SurveyResults.push(Results);

    await survey.save();

    res.json("Success");
  } catch (error) {
    console.error(error);
    res.status(500).json("Server error");
  }
});

export default router;
