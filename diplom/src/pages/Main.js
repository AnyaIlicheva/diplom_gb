import React from "react";
import "../styles/main.scss";
import { Provider } from "react-redux";
import store from "../redux/store";
import logo from "../assets/images/logoWhithOutMascot.png";
import mascot from "../assets/images/helpyHello1.png";
import goButtonImage from "../assets/images/goButton.png";
import goMainImage from "../assets/images/goMain.png";
import goToWorkPageImage from "../assets/images/goHabits.png";
import goToAchivements from "../assets/images/goAchivements.png";
import helloImage from "../assets/images/blockHello.png";
import { useNavigate } from "react-router-dom";
const Main = () => {
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
        </header>
        <main>
          <span className="blockHello">
            <img className="helloText" src={helloImage} alt="hello"></img>
            <img className="mainMascot" src={mascot} alt="Mascot" />
          </span>
          <img
            className="goButton"
            src={goButtonImage}
            alt="Перейти на страницу привычек"
            onClick={goToWorkPage}
          />
        </main>
        <footer></footer>
      </div>
    </Provider>
  );
};

export default Main;
