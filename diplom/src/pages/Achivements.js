import "../styles/main.scss";
import { useNavigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import logo from "../assets/images/logoWhithOutMascot.png";
import goMainImage from "../assets/images/goMain.png";
import goToWorkPageImage from "../assets/images/goHabits.png";
import goToAchivements from "../assets/images/goAchivements.png";
import LearnedHabit from "../components/LearnedHabit";
import AchievementsComp from "../components/AchievementsComp";

const Achivements = () => {
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
          <p>Я так горжусь тобой!</p>
          <p>
            У меня есть 4 награды. И я хочу подарить тебе по одной за каждые две
            освоенные привычки!
          </p>
        </header>
        <LearnedHabit />
        <footer>
          <AchievementsComp />
        </footer>
      </div>
    </Provider>
  );
};

export default Achivements;
