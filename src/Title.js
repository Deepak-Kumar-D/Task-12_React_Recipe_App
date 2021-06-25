import { useContext } from "react";
import { mode } from "./App";

function Title() {
  const { theme } = useContext(mode);

  return (
    // Header of the website
    <header>
      <div>
        <h2
          style={{
            color: theme === "dark" ? "" : "#f5b876",
            transition: "0.1s",
          }}
        >
          Just
        </h2>
        <h1
          style={{ opacity: theme === "dark" ? "" : "0.4", transition: "0.1s" }}
        >
          RECIPE
        </h1>
      </div>
    </header>
  );
}

export { Title };
