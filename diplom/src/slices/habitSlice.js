import { createSlice } from "@reduxjs/toolkit";

const saveToLocalStorage = (items) => {
  localStorage.setItem("habit-items", JSON.stringify(items));
};

const initialState = {
  items: JSON.parse(localStorage.getItem("habit-items") || "[]").map(
    (habit) => ({
      ...habit,
      isCompleted: habit.isCompleted || false,
    })
  ),
};

const habitsSlice = createSlice({
  name: "habit",
  initialState,
  reducers: {
    addHabit: (state, action) => {
      const newHabit = { text: action.payload, id: Date.now() };
      state.items.push(newHabit);
      saveToLocalStorage(state.items);
    },
    deletedHabit: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveToLocalStorage(state.items);
    },
    markHabitAsCompleted: (state, action) => {
      const { habitId, checkedDaysCount } = action.payload;

      const habit = state.items.find((item) => item.id === habitId);

      if (habit && checkedDaysCount >= 15) {
        habit.isCompleted = true;
        saveToLocalStorage(state.items);
      } else {
        habit.isCompleted = false;
        saveToLocalStorage(state.items);
      }
    },
  },
});

export const { addHabit, deletedHabit, markHabitAsCompleted } =
  habitsSlice.actions;
export default habitsSlice.reducer;
