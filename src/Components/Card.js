import React, { useState, useEffect } from "react";
import Card1 from "./Card1";
import Search from "./Search";
import "../styles/Card1.scss";

function Card() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        setData(users);
      });
  }, []);

  return (
    <div className="userMain">
      <Search />
      <div className="userCards">
        {data.map((user) => (
          <Card1 name={user.name} email={user.email} key={user.name} />
        ))}
      </div>
    </div>
  );
}

export default Card;
