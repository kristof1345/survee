import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Render from "./pages/Render";
import Dashboard from "../src/pages/Dashboard";
import Editor from "../src/pages/Editor";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [id, setID] = useState(nanoid(10));
  const [UID, setUID] = useState(
    JSON.parse(localStorage.getItem("UID")) || null
  );

  // useEffect(() => {
  //   // if there is no UID(no user) create one
  //   console.log("main ran");
  //   if (UID === null) {
  //     // let id = nanoid(10);
  //     localStorage.setItem("UID", JSON.stringify(id));
  //     setUID(id);
  //     console.log(id);
  //     newUser(id);
  //   }
  // }, []);

  // const newUser = (id) => {
  //   axios
  //     .post("http://localhost:3000/user/new", {
  //       UID: id,
  //     })
  //     .then((res) => console.log(res.data));
  // };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Dashboard id={id} UID={UID} setUID={setUID} />}
        />
        <Route path="/survey/:id" element={<Editor UID={UID} />} />
        <Route path="/:id" element={<Render />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
