import React from "react";
import DoneOutlineSharpIcon from "@mui/icons-material/DoneOutlineSharp";

const CompletedButton = ({ onClick, isCompleted }) => {
  return (
    <button
      className="completedButton"
      style={{ visibility: isCompleted ? "visible" : "hidden" }}
      onClick={onClick}
    >
      <DoneOutlineSharpIcon fontSize="small" />
    </button>
  );
};

export default CompletedButton;
