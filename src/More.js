import { useParams } from "react-router";
import { Title } from "./Title";
import { Back } from "./Back";
import { useContext } from "react";
import { mode } from "./App";

function More() {
  const { theme, recipes } = useContext(mode);

  const { name } = useParams();
  const item = recipes.find((ele) => ele.name === name);
  const ingds = item.ingredients;
  const procedure = item.procedure;

  let count = 1;

  return (
    <div className="more">
      <div className="more-top">
        <div className="more-block1">
          <div className="image-block1">
            <img src={item.src} alt={item.name}></img>
          </div>

          <div className="more-block1-Ing">
            <h2 style={{ color: theme === "dark" ? "" : "#f5b876" }}>
              Ingredients
            </h2>

            <hr></hr>

            {/* Ingredients section in the procedure page */}
            <ul>
              {ingds.map((ingredients, index) => {
                return (
                  <li
                    key={index}
                    style={{ color: theme === "dark" ? "" : "#f5b876" }}
                  >
                    {ingredients}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Header and go back to main page section */}
        <header>
          <section className="more-midblock">
            <Title />
            <hr style={{ marginTop: "20px" }} />
            <h1 style={{ color: "#f5b876", textAlign: "center" }}>
              {name.toUpperCase()}
            </h1>
            <hr />
            <Back />
          </section>
        </header>
      </div>

      <hr></hr>

      {/* Shows the procedure the selected recipe */}
      <div
        className="more-block2"
        style={{ filter: theme === "dark" ? "" : "invert(1)" }}
      >
        <h2>Procedure</h2>

        <hr></hr>

        {procedure.map((steps, index) => {
          return (
            <p key={index}>
              <b>Step {count++}:</b> {steps}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export { More };
