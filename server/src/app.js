import express, { json } from "express";
import router1 from "../routes/newUser";
import cors from "cors";
import connectDB from "../config/db";

const app = express();

connectDB();

app.use(json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use("/user", router1);

app.listen(PORT, () => console.log(`App listening at port ${PORT}`));
