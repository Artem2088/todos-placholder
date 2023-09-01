import React from "react";
import ReactDOM from "react-dom/client";
import TodoLists from "./components/TodosLIsts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TodoLists />
  </React.StrictMode>
);
