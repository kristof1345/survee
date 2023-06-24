import express, { json } from "express";
import router1 from "../routes/newUser";
import router2 from "../routes/newSurvey";
import cors from "cors";
import connectDB from "../config/db";

const app = express();

connectDB();

app.use(json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use("/user", router1);
app.use("/survey", router2);
app.get("/:id", (req, res) => {
  let { id } = req.params;

  res.redirect(`http://127.0.0.1:5173/${id}`);
});

app.listen(PORT, () => console.log(`App listening at port ${PORT}`));
