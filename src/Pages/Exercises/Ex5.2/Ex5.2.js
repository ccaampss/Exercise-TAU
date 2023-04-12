import React, { useRef } from "react";

function App() {
  const paragraphRef = useRef(null);

  function modifyNode() {
    // Get the reference to the paragraph node
    const myParagraph = paragraphRef.current;

    // Modify the text and color of the paragraph
    myParagraph.textContent = "Goodbye, world!";
    myParagraph.style.color = "#85C7F2";
  }

  return (
    <div>
      <p ref={paragraphRef}>Hello, world!</p>
      <button className='Modify' onClick={modifyNode}>Modify it!</button>
    </div>
  );
}

export default App;
