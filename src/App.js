import { Fragment, useState } from "react";
import GoogleDrive from "./Components/GoogleDrive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import "./Components/App.css";
import DropBox from "./Components/DropBox";

function App() {
 const [isshow,setisshow]=useState(false);
 const showhandler=()=>{
   setisshow(true);
 }
  return (
    <Fragment>
      <section className="maindisplay">
      {isshow && <GoogleDrive />}
      {isshow && <DropBox/>}
     { !isshow && <div className="main">
       <button onClick={showhandler} className="btn">
          Browse Files
          <FontAwesomeIcon className="dataicon" icon={faDatabase} />
        </button>
      </div> }
      </section>
    </Fragment>
  );
}

export default App;
