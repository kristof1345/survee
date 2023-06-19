import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import axios from "axios";

const Dashboard = ({ id, UID, setUID }) => {
  let prev;

  useEffect(() => {
    // if there is no UID(no user) create one
    if (!(prev === UID) && UID === null) {
      // let id = nanoid(10);
      localStorage.setItem("UID", JSON.stringify(id));
      setUID(id);
      newUser(id);
    }
    // console.log(UID);
    prev = UID;
  }, []);

  const newUser = (id) => {
    axios
      .post("http://localhost:3000/user/new", {
        UID: id,
      })
      .then((res) => console.log(res.data));
  };

  return <div>Dashboard</div>;
};

export default Dashboard;