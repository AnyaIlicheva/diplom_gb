import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deletedHabit } from "../slices/habitSlice";
import DeleteButton from "../components/DeleteButton";
import Modal from "../components/Modal";
import "../styles/main.scss";

const LearnedHabit = () => {
  const dispatch = useDispatch();
  const [learnedHabits, setLearnedHabits] = useState([]);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [habitToDelete, setHabitToDelete] = useState(null);

  useEffect(() => {
    const habitDoneData = JSON.parse(localStorage.getItem("habitDone") || "[]");
    setLearnedHabits(habitDoneData);
  }, []);

  const showDeleteModal = (index) => {
    setHabitToDelete(index);
    setDeleteModalVisible(true);
  };

  const hideDeleteModal = () => {
    setDeleteModalVisible(false);
    setHabitToDelete(null);
  };

  const handleDelete = () => {
    const habitDoneData = JSON.parse(localStorage.getItem("habitDone") || "[]");

    const updatedHabitDone = habitDoneData.filter(
      (_, i) => i !== habitToDelete
    );

    localStorage.setItem("habitDone", JSON.stringify(updatedHabitDone));

    setLearnedHabits(updatedHabitDone);

    dispatch(deletedHabit(habitToDelete));

    hideDeleteModal();
  };

  return (
    <div className="App">
      <main>
        <h1>Мои достижения</h1>
        <ul className="achivements-ul">
          {learnedHabits.length === 0 ? (
            <span className="achivements-list">
              <h4>У вас еще нет освоенных привычек.</h4>
            </span>
          ) : (
            learnedHabits.map((habit, index) => (
              <li key={habit.id} className="achivements-list">
                <span className="habitTitle">{habit.name}</span>
                <span className="habitDays">
                  {
                    habit.completedDaysCount >= 15 &&
                    habit.completedDaysCount <= 20
                      ? `Привычка освоена за ${habit.completedDaysCount} дней!`
                      : habit.completedDaysCount === 21
                      ? `Привычка освоена за ${habit.completedDaysCount} день!`
                      : `Привычка освоена за ${habit.completedDaysCount} дней!` /* Для всех других случаев, если не попадает под условия */
                  }
                </span>
                <DeleteButton onClick={() => showDeleteModal(index)} />
              </li>
            ))
          )}
        </ul>
      </main>

      {isDeleteModalVisible && (
        <Modal
          message="Вы уверены, что хотите удалить эту привычку?"
          onConfirm={handleDelete}
          onCancel={hideDeleteModal}
        />
      )}
    </div>
  );
};

export default LearnedHabit;
