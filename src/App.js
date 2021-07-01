import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

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
      <FruitApp />
      <NatureTag name="RIVER GANGA" />
      <CityApp name="Delhi" id="d" />
      <CityApp name="Kolkata" id="k" />
      <CityApp name="Mumbai" id="m" />
      <CityApp name="Chennai" id="c" />
    </div>
  );
}

/**
 * SPECIAL
 * COMPONENT BOY
 * IT RETUNRNS JSX.
 * LOOK AT THE METHOD NAME AS WELL>
 *
 * LITTLE WIERD :: CITY IS STATIC. :: PROBLEM SOLVED :: DYMAIC COMPONEENT
 * RESUCE :: FUNCTION PARAMETER  :: USING THE CONCEPT OF PROPS
 *
 * <CityApp>
 *
 * {id, name} = props
 */
function CityApp({ id, name }) {
  return (
    <h1>
      {id} :: {name}
    </h1>
  );
}

/**
 * let {name} = props;
 */
function NatureTag(props) {
  return <h1>{props.name}</h1>;
}

/**
 * HARDCODED COMPONENT
 * <FruitApp
 */
function FruitApp() {
  return <h1>Mango</h1>;
}

export default App;
