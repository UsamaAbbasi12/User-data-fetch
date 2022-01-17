import React, { useState } from "react";
import "../styles/main.scss";
function Search() {
  const [data, setData] = useState("");
  const styles = {
    width: "400px",
    padding: "15px",
    margin: "10px auto",
    display: "block",
    border: "2px solid gray",
    outline: "none",
    borderRadius: "8px",
  };
  return (
    <div>
      <form>
        <input
          type="text"
          value={data}
          placeholder="Enter Name to Search"
          style={styles}
          onChange={(e) => setData(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Search;
