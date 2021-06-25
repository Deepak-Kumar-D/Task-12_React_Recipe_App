import { useContext } from "react";
import { mode } from "./App";

function Search({ setSearch }) {
  const { theme } = useContext(mode);

  return (
    <div className="search">
      <div>
        {/* Searchbar for the filter function */}
        <input
          type="text"
          placeholder="Search your delicacy here..."
          onChange={(event) => setSearch(event.target.value)}
          style={{
            backgroundColor: theme === "dark" ? "" : "#a3a1a1",
            color: theme === "dark" ? "" : "white",
            border: theme === "dark" ? "" : "2px solid #f5b876",
            transition: "0.1s",
          }}
        ></input>
      </div>
    </div>
  );
}

export { Search };
