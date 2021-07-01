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
 *
 * ATTRIBUTES ARE OPTIONAL
 */
function App() {
  return (
    <div>
      <div>Delhi</div>
      <div>Kolkata</div>

      <CityApp id="D" />
      <CityApp />
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
function CityApp({ id = "DID", name = "DNAME" }) {
  return (
    <h1>
      {id} :: {name}
    </h1>
  );
}

export default App;
