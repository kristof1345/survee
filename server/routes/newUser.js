import express from "express";
import User from "../model/User";

const router = express.Router();

router.post("/new", async (req, res) => {
  const { UID } = req.body;
  try {
    let user = await User.findOne({ UID });

    if (user) {
      res.json(user);
    } else {
      user = new User({
        UID: UID,
        Surveys: [],
      });

      await user.save();

      res.json(user);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("Server error");
  }
});

export default router;
