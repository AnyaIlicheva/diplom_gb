import React from "react";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";

const DeleteButton = ({ onClick }) => {
  return (
    <button className="deletButton" onClick={onClick}>
      <DeleteSharpIcon fontSize="small" />
    </button>
  );
};

export default DeleteButton;
