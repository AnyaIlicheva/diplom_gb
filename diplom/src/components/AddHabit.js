import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../styles/main.scss";
import { addHabit } from "../slices/habitSlice";

const AddHabit = () => {
  const [habit, setHabit] = useState("");
  const dispatch = useDispatch();

  const handleAddHabit = () => {
    if (habit.length === 0) {
      alert("напишите название привычки");
    } else {
      dispatch(addHabit(habit));
    }
    setHabit("");
  };

  return (
    <div className="addedHabitCard">
      <input
        type="text"
        value={habit}
        onChange={(e) => setHabit(e.target.value)}
        placeholder="название привычки"
      />

      <button className="habitButton" onClick={handleAddHabit}>
        добавить привычку
      </button>
    </div>
  );
};
export default AddHabit;
