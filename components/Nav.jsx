import { useState, useEffect } from "react";

function Nav() {
  const [name, setName] = useState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setName(localStorage.getItem("username"));
    }
  }, []);

  return (
    <div className="nav">
      <div className="logo">Churuchat</div>
      <div className="user">
        <div className="name">{name}</div>
        <img src={`https://avatars.dicebear.com/api/gridy/${name}.svg`}></img>
      </div>
    </div>
  );
}

export default Nav;
