import React, { useRef } from 'react';
import { ReactSketchCanvas } from "react-sketch-canvas";
import { FaUndoAlt } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import './Canvas.css'

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
    <div className="canvas-container">
      <ReactSketchCanvas
        ref={canvasRef}
        style={{ border: '1px solid #000' }}
        width="400px"
        height="400px"
        strokeWidth={4}
        strokeColor="black"
      />
      <div className="buttons-container">
        <button className="submit-button" onClick={handleSubmit}>Submit</button>
        <div className="right-buttons">
          <button className="clear-button" onClick={handleClear}>
            <FaTrash />
          </button>
          <button className="undo-button" onClick={handleUndo}>
            <FaUndoAlt />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Canvas;