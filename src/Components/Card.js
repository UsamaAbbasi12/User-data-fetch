import React, { useState, useEffect } from "react";
import Card1 from "./Card1";
// import Search from "./Search";
import "../styles/Card1.scss";

function Card() {
  const [data, setData] = useState([]);
  const [searchItem, setSearch] = useState("");
  const styles = {
    width: "400px",
    padding: "15px",
    margin: "10px auto",
    display: "block",
    border: "2px solid gray",
    outline: "none",
    borderRadius: "8px",
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        setData(users);
      });
  }, []);
  const changeHandler = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  return (
    <div className="userMain">
      <div className="userCards">
        <input
          type="text"
          value={searchItem}
          placeholder="Enter Name to Search"
          style={styles}
          onChange={changeHandler}
        />

        {data
          .filter((val) => {
            if (searchItem === "") {
              return val;
            } else if (
              searchItem ===
              val.name.toLowerCase().includes(searchItem.toLowerCase())
            ) {
            }
          })
          .map((user) => (
            <Card1 name={user.name} email={user.email} key={user.name} />
          ))}
      </div>
    </div>
  );
}

export default Card;
