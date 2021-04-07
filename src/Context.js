import axios from "axios";
import React, { useEffect, createContext, useState } from "react";

export const myContext = createContext({});
export default function Context(props) {
  const [user, setUser] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/user", { withCredentials: true })
      .then((res) => {
        setUser(res.data);
      });
  }, []);

  return <myContext.Provider value={user}>{props.children}</myContext.Provider>;
}
