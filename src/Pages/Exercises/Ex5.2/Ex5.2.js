import React, { useRef } from "react";
import { TbBalloon } from "react-icons/tb";

function App() {
  const paragraphRef = useRef(null);

  function modifyNode() {
    const myParagraph = paragraphRef.current;
    myParagraph.textContent = "ooh, see you :(";
    myParagraph.style.color = "red";
  }

  return (
    <div>
      <p className="text" style={{ 
      color: "black",
      fontSize:"25px",
      }}
      ref={paragraphRef} >Hello, balloon! {<TbBalloon/>}</p>
      <button className="modify" onClick={modifyNode} 
      style={{ borderRadius: "5px", 
      cursor:"pointer", 
      border:"none",
      backgroundColor:"white",
      fontSize:"15px",
      marginTop:"10px",
       }}> Make some changes</button>
    </div>
  );
}

export default App;
