import React from "react";
import ReactDOM from "react-dom/client";
import Button from "./Button";
import "../index.less";

function App() {
  return (
    <>
      <div className="test">
        this is react page
        <div className="test2">test2</div>
      </div>
      <Button />
    </>
  );
}

const container = document.querySelector("#app");
const root = ReactDOM.createRoot(container);
const vdom = React.createElement(App);
root.render(vdom);
