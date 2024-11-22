import React from "react";
import { useSelector } from "react-redux";
import "../styles/main.scss";
import HabitItem from "./HabitItem";

const HabitsList = () => {
  const habits = useSelector((state) => state.habits);

  return (
    <ul>
      <h1>Список полезных привычек</h1>

      {habits.items.map((item) => (
        <li className="list" key={item.id}>
          <HabitItem {...item} />
        </li>
      ))}
    </ul>
  );
};

export default HabitsList;
