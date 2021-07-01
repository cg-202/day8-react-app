import logo from "./logo.svg";
import "./App.css";

/**
 * SPECIAL FUNCTION. ITS RETURNS JSX.
 *
 * METHOD
 * COMPONENT BOY/GIRL
 * Method Name :: Starts with Capital
 * React Component
 *
 * This function is creating a CUSTOM TAG / COMPONENT.
 * React Tags Starts with CAPITAL LETTER
 * <App />
 *
 * HTML Has A SET OF PREFDEINFED TAGS :: Can we create CUSTOM TAGS?
 * <TAG-NAME></TAG-NAME>
 * <div></div>
 * <h1></h1>
 */
function App() {
  return (
    <div>
      <CityApp />
      <CityApp />
      <CityApp />
    </div>
  );
}

/**
 * SPECIAL
 * COMPONENT BOY
 * IT RETUNRNS JSX.
 * LOOK AT THE METHOD NAME AS WELL>
 *
 * <CityApp>
 */
function CityApp() {
  return <h1>MUMBAI</h1>;
}

export default App;
