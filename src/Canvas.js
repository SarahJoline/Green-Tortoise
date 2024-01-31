import React, { useEffect, useRef } from "react";
import Receptionist from "./Receptionist";

const Canvas = (props) => {
  const canvasRef = useRef(null);

  const player = new Receptionist({ x: 460, y: 235 });

  const draw = (ctx) => {
    ctx.strokeStyle = "#228B22";
    ctx.lineWidth = 5;

    // Ballroom Door
    ctx.beginPath();

    ctx.moveTo(150, 500);

    ctx.lineTo(350, 500);

    ctx.stroke();

    // stairs area
    ctx.beginPath();

    ctx.moveTo(500, 500);

    ctx.lineTo(500, 400);

    ctx.stroke();

    // To rooms
    ctx.beginPath();

    ctx.moveTo(0, 0);

    ctx.lineTo(100, 0);

    ctx.stroke();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    draw(context);
    player.draw(context);
  }, [player]);

  return <canvas ref={canvasRef} {...props} />;
};

export default Canvas;
