import React from "react";
import spinner from "./loading.gif";
const Spinner = () => {
  return (
    <div className="text-center">
      <img src={spinner} alt="spinner" />
    </div>
  );
};
export default Spinner