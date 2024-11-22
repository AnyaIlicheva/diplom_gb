import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletedHabit, markHabitAsCompleted } from "../slices/habitSlice";
import HabitCheckboxes from "./HabitCheckboxes";
import DeleteButton from "./DeleteButton";
import CompletedButton from "./CompletedButton";
import Modal from "./Modal";
import "../styles/main.scss";
const HabitItem = ({ id, text }) => {
  const dispatch = useDispatch();

  const [checkedDays, setCheckedDays] = useState([]);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [isCompletedModalVisible, setCompletedModalVisible] = useState(false);

  const habit = useSelector((state) =>
    state.habits.items.find((habit) => habit.id === id)
  );

  const showDeleteModal = () => setDeleteModalVisible(true);
  const hideDeleteModal = () => setDeleteModalVisible(false);

  const showCompletedModal = () => setCompletedModalVisible(true);
  const hideCompletedModal = () => setCompletedModalVisible(false);

  const handleDeleteConfirm = () => {
    localStorage.removeItem(`habit-${id}`);
    dispatch(deletedHabit(id));
    hideDeleteModal();
  };

  const handleCompletedConfirm = () => {
    const habitDoneData = JSON.parse(localStorage.getItem("habitDone") || "[]");
    const completedDays = checkedDays.length;
    const habitDoneEntry = {
      id: id,
      name: text,
      completedDaysCount: completedDays,
    };

    habitDoneData.push(habitDoneEntry);
    localStorage.setItem("habitDone", JSON.stringify(habitDoneData));

    localStorage.removeItem(`habit-${id}`);
    dispatch(deletedHabit(id));
    hideCompletedModal();
  };

  const handleCheckboxChange = (habitId, day) => {
    const newCheckedDays = [...checkedDays];
    if (newCheckedDays.includes(day)) {
      newCheckedDays.splice(newCheckedDays.indexOf(day), 1);
    } else {
      newCheckedDays.push(day);
    }

    setCheckedDays(newCheckedDays);
    localStorage.setItem(`habit-${habitId}`, JSON.stringify(newCheckedDays));

    dispatch(
      markHabitAsCompleted({
        habitId: habitId,
        checkedDaysCount: newCheckedDays.length,
      })
    );
  };

  useEffect(() => {
    const habitData = localStorage.getItem(`habit-${id}`);
    if (habitData) {
      setCheckedDays(JSON.parse(habitData));
    }
  }, [id]);

  return (
    <span>
      <span className="habitTitle">{text}</span>
      <span className="check">
        <details className="helpSummary">
          <summary> подсказка </summary>
          {"Отметь галочкой день, если сегодня ты соблюдал привычку."}
        </details>
        <HabitCheckboxes
          days={21}
          checkedDays={checkedDays}
          handleCheckboxChange={handleCheckboxChange}
          habitId={id}
        />
      </span>
      <div className="buttons">
        <DeleteButton onClick={showDeleteModal} />
        <CompletedButton
          onClick={showCompletedModal}
          isCompleted={habit?.isCompleted}
        />
      </div>

      {isDeleteModalVisible && (
        <Modal
          message="Вы уверены, что хотите удалить эту привычку?"
          onConfirm={handleDeleteConfirm}
          onCancel={hideDeleteModal}
        />
      )}

      {isCompletedModalVisible && (
        <Modal
          message="Поздравляю с освоенной привычкой! Перенести ее в раздел Мои достижения?"
          onConfirm={handleCompletedConfirm}
          onCancel={hideCompletedModal}
        />
      )}
    </span>
  );
};

export default HabitItem;
