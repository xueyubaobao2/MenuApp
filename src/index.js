import React from "react";
import ReactDOM from "react-dom";
import List from "./List";
import "./styles.css";

function App() {
  return <List />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
