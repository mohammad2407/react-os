import React from "react";
import { Child } from "./Child.jsx";

const Parent = () => {
  return (
    <div>
      <h1>Parent Component</h1>
      <Child value = {{name:"mohammad"}}/>

      <Child>
        <div>Some Props can also be passed this way</div>
      </Child>
    </div>
  )
}

export {Parent}
