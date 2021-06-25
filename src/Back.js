import { useHistory } from "react-router";
import { useContext } from "react";
import { mode } from "./App";

function Back() {
  const back = useHistory();
  const { theme } = useContext(mode);

  // Go back button using useHistory Hook
  return (
    <div style={{ alignItems: "center" }}>
      <button
        className="back-btn"
        onClick={() => back.goBack()}
        style={{ filter: theme === "dark" ? "" : "grayscale(0.6)" }}
      >
        GO BACK
      </button>
    </div>
  );
}

export { Back };
