import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppXY from "./AppXY";
import AppMentors from "./AppMentors";
import AppMentorsImmer from "./AppMentorsImmer";
import AppForm from "./AppForm";
import AppWrap from "./AppWrap";
import AppTheme from "./AppTheme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppTheme />
  </React.StrictMode>
);
