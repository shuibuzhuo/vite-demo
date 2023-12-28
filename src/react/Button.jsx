import React from "react";

function doSomething() {
  console.log("do something");
}

function Button() {
  return <button onClick={doSomething}>click me</button>;
}

export default Button;
