import React from "react";
import "../styles/main.scss";
import { Provider } from "react-redux";
import AddHabit from "../components/AddHabit";
import store from "../redux/store";
import HabitsList from "../components/HabitsList";
import logo from "../assets/images/logoWhithOutMascot.png";
import mascotAdvice from "../assets/images/helpyAdvice.png";
import goMainImage from "../assets/images/goMain.png";
import goToWorkPageImage from "../assets/images/goHabits.png";
import goToAchivements from "../assets/images/goAchivements.png";
import Motivation from "../components/Motivation";
import { useNavigate } from "react-router-dom";

const WorkPage = () => {
  const navigate = useNavigate();

  const goToWorkPage = () => {
    navigate("/habits");
  };
  const goMain = () => {
    navigate("/");
  };
  const goAchivements = () => {
    navigate("/achivements");
  };
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          <div className="navigation">
            <img
              className="navButton"
              src={goMainImage}
              alt="На главную"
              onClick={goMain}
            ></img>
            <img
              className="navButton"
              src={goToWorkPageImage}
              alt="На страницу привычек"
              onClick={goToWorkPage}
            ></img>
            <img
              className="navButton"
              src={goToAchivements}
              alt="На страницу достижений"
              onClick={goAchivements}
            ></img>
          </div>
          <span className="blockTitle">
            <img className="logo" src={logo} alt="logo" />
          </span>

          <p className="description">
            Согласно исследованиям, для того, чтобы привычка закрепилась в жизни
            человека, необходимо соблюдать ее каждый день на протяжении 21 дня.
          </p>
        </header>
        <main>
          <AddHabit />
          <HabitsList />
        </main>
        <footer>
          <div className="motivation-block">
            <Motivation />
            <img className="mascot" src={mascotAdvice} alt="Mascot" />
          </div>
        </footer>
      </div>
    </Provider>
  );
};

export default WorkPage;
