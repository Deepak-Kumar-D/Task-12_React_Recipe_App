import { createContext, useEffect, useState } from "react";
import "./App.css";
import { MainPage } from "./MainPage";
import { Route, Switch } from "react-router-dom";
import { More } from "./More";
import { Form } from "./Form";

const mode = createContext(null);

function App() {
  const [recipes, setRecipes] = useState([]);
  const [theme, setTheme] = useState("dark");

  function getRecipe() {
    // Fetching recipe data from the MOCK API
    fetch("https://609e2ac333eed80017957e36.mockapi.io/recipe", {
      method: "GET",
    })
      .then((rec) => rec.json())
      .then((rec) => setRecipes(rec));
  }

  const shade = () => {
    setTheme(theme === "normal" ? "dark" : "normal");

    if (theme === "dark") {
      document.body.style.backgroundImage = "none";
      document.body.style.backgroundColor = "#202020";
    } else {
      document.body.style.backgroundImage = "";
    }
  };

  useEffect(() => {
    // Title of the website
    document.title = "Just Recipe";
    getRecipe();
  }, []);

  return (
    <>
      <button
        className="mode"
        style={{
          backgroundColor: theme === "dark" ? "#202020" : "#797979",
          color: theme === "dark" ? "#f5f5f5" : "#f5b876",
        }}
        onClick={shade}
      >
        {theme.toUpperCase()}
      </button>

      <mode.Provider value={{ theme, getRecipe, recipes }}>
        <Switch>
          {/* HOME Page with Recipes and searchbar */}
          <Route exact path="/">
            <MainPage />
          </Route>

          {/* Procedure Page which shows the ingredients and the procedure of the selected recipe from the pop-up window */}
          <Route path="/more&:name">
            <More />
          </Route>

          {/* Add a New Recipe Form Page */}
          <Route path="/addRecipe">
            <Form />
          </Route>
        </Switch>
      </mode.Provider>
    </>
  );
}

export { App, mode };
