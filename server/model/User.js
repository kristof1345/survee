import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  UID: String,
  Surveys: Array,
});

export default mongoose.model("User", userSchema);
