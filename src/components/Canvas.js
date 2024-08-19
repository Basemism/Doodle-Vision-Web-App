import React, { useRef } from 'react';
import { ReactSketchCanvas } from "react-sketch-canvas";

const Canvas = ({onSubmit}) => {
  const canvasRef = useRef(null);

  const handleSubmit = async () => {
    const dataURL = await canvasRef.current.exportImage('png');
    onSubmit(dataURL);
  };

  const handleClear = () => {
    canvasRef.current.clearCanvas();
  };

  const handleUndo = () => {
    canvasRef.current.undo();
  };

  return (
      <div>
      <ReactSketchCanvas
        ref={canvasRef}
        style={{ border: '1px solid #000', marginBottom: '20px' }}
        width="400px"
        height="400px"
        strokeWidth={4}
        strokeColor="black"
      />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleClear}>Clear</button>
      <button onClick={handleUndo}>Undo</button>
    </div>
    );
}

export default Canvas