import { useContext } from "react";
import { mode } from "./App";

function ImageBlock({ id, name, src }) {
  const { theme } = useContext(mode);

  return (
    <>
      {/* Image grid of the recipes on the Main Page */}
      <div className="image">
        <img src={src} alt={id}></img>
      </div>

      {/* Recipe name under Image on the Main Page */}
      <div>
        <h3 style={{ color: theme === "dark" ? "" : "#f5b876" }}>{name}</h3>
      </div>
    </>
  );
}

export { ImageBlock };
