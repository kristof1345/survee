import mongoose from "mongoose";

const surveySchema = new mongoose.Schema({
  UID: String,
  SurveyID: String,
  SurveyContent: Array,
  SurveyResults: Array,
});

export default mongoose.model("Survey", surveySchema);
