import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "black",
};

 function Spinner() {

  let [color, setColor] = useState("#ffffff");

  return (
    <div className="sweet-loading my-64">
      <ClipLoader
        color={color}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Spinner;