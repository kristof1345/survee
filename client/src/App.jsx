import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import axios from "axios";

function App() {
  const [id, setID] = useState(nanoid(10));
  const [UID, setUID] = useState(
    JSON.parse(localStorage.getItem("UID")) || null
  );

  useEffect(() => {
    // if there is no UID(no user) create one
    if (UID === null) {
      // let id = nanoid(10);
      localStorage.setItem("UID", JSON.stringify(id));
      setUID(id);
      console.log(id);
      newUser(id);
    }
  }, []);

  const newUser = (id) => {
    axios
      .post("http://localhost:3000/user/new", {
        UID: id,
      })
      .then((res) => console.log(res.data));
  };

  return <div>hey</div>;
}

export default App;
