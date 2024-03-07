import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useGlobalContext } from "../Context/ContextApi";



 function Spinner() {

const {isDarkMode }=useGlobalContext();

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: isDarkMode ? 'white' : 'black',
};
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