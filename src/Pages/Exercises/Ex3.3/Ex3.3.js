import React, { useRef, useEffect } from 'react';


function App() {
    const [canvasSize, setCanvasSize] = React.useState([window.innerWidth, window.innerHeight]);
    const [mousePos, setMousePos] = React.useState(null);
    const [printMode, setPrintMode] = React.useState(false);

    // reference to canvas element, in JSX content
    // there is ref={canvasRef} which causes that
    // element to be stored here
    const canvasRef = useRef(null);

    window.onbeforeprint = (event) => {
        setPrintMode(true);
    }

    window.onafterprint = (event) => {
        setPrintMode(false);
    }

    window.onresize = (event) => {
        // always keep canvas the same size as the window
        setCanvasSize([window.innerWidth, window.innerHeight]);
    }

    const setMouseCoordinates = (event) => {
        setMousePos({ x: event.clientX, y: event.clientY });
    }

    const drawcircle = (ctx, circle) => {
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(95, 50, 40, 0, 2 * Math.PI);
        ctx.stroke();
    }
    const drawcircleRotated = (ctx, circle) => {
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.transform(1, 0.5, -0.5, 1, 30, 10);
        ctx.arc(95, 50, 40, 0, 2 * Math.PI);
        ctx.stroke();
    }

    useEffect(() => {
        // This is called every time the UI has updated.
        // When this is executed for the first time, the canvas has already been created.
        let ctx = canvasRef.current.getContext('2d');
        if (mousePos === null)
            return;
        // width an height are used in various places, store them in these variables to shorten the following code
        let [w, h] = [canvasRef.current.width, canvasRef.current.height];
        // clear canvas
        if (printMode) {
            ctx.clearRect(0, 0, w, h);
            ctx.strokeStyle = "black";
            ctx.fillStyle = "black";
        } else {
            ctx.fillStyle = "#2E3561";
            ctx.fillRect(0, 0, w, h);
            ctx.strokeStyle = "white";
            ctx.fillStyle = "white";
        }

        // save the current canvas transform so that we can go back to it
        ctx.save();

        // cursor
        ctx.lineWidth = 2.0;
        if (printMode) {
            ctx.strokeStyle = "black";
            ctx.shadowColor = "gray";
        } else {
            ctx.strokeStyle = "white";
            ctx.shadowColor = "lightGray";
        }
        ctx.shadowBlur = 3;
        ctx.shadowOffsetX = 4;
        ctx.shadowOffsetY = 4;
        ctx.lineWidth = 1.0;
        ctx.restore();

        // calculate the angle from the center to the mouse point, value is in radians as are all values to and from Math trigonometric functions
        let angle = Math.atan2(mousePos.y - h / 2, mousePos.x - w / 2);

        ctx.save();
        ctx.strokeStyle = "gray";
        // distance of the mouse from center displayed
        // doing different transform so that text is always upright (or vertical in the worst cases)
        if (Math.abs(angle) < Math.PI / 2) {
            ctx.translate(w / 2, h / 2);
            ctx.rotate(angle);
        } else {
            ctx.translate(mousePos.x, mousePos.y);
            ctx.rotate(angle + Math.PI);
        }

        ctx.restore();

        // distance in x dimension (horizontal)
        ctx.save();
        ctx.translate(Math.min(w / 2, mousePos.x), h / 2);

        ctx.restore();

        // distance in y dimension (vertical)
        ctx.save();
        ctx.translate(mousePos.x, Math.max(h / 2, mousePos.y));
        ctx.rotate(-Math.PI / 2);

        ctx.restore();

        // angle
        ctx.save();
        ctx.setLineDash([2, 2]);
        ctx.translate(w / 2, h / 2);
        drawcircle(ctx, 100);
        drawcircleRotated(ctx, 100);
        ctx.restore();
    });
    // the jsx include fixed positions and z-index definitions 
    // to put canvas and Typography on top of each other
    return (
        <canvas id='canvas'
            width={canvasSize[0] * 0.9}
            height={canvasSize[1] * 0.6}
            ref={canvasRef}
            onMouseMove={setMouseCoordinates}
            style={{ "cursor": "none" }}
        />

    );
}

export default App;