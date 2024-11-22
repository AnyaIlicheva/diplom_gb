import React, { useEffect, useState } from "react";
import achivementOne from "../assets/images/achivements_one.png";
import achivementTwo from "../assets/images/achivements_two.png";
import achivementThree from "../assets/images/achivements_three.png";
import achivementFour from "../assets/images/achivements_four.png";
import achivementOnePodium from "../assets/images/achivements_one_podium.png";
import achivementTwoPodium from "../assets/images/achivements_two_podium.png";
import achivementThreePodium from "../assets/images/achivements_three_podium.png";
import achivementFourPodium from "../assets/images/achivements_four_podium.png";

const AchievementsComp = () => {
  const [habitDone, setHabitDone] = useState([]);

  const [imagesToDisplay, setImagesToDisplay] = useState([]);

  const initialImages = [
    achivementFourPodium,
    achivementThreePodium,
    achivementTwoPodium,
    achivementOnePodium,
  ];

  const newImages = [
    achivementFour,
    achivementThree,
    achivementTwo,
    achivementOne,
  ];

  useEffect(() => {
    const storedHabitDone = JSON.parse(
      localStorage.getItem("habitDone") || "[]"
    );
    setHabitDone(storedHabitDone);
  }, []);

  useEffect(() => {
    const updatedImages = [];

    const habitLength = habitDone.length;

    if (habitLength <= 1) {
      updatedImages.push(
        initialImages[0],
        initialImages[1],
        initialImages[2],
        initialImages[3]
      );
    } else if (habitLength >= 2 && habitLength <= 3) {
      console.log(habitDone.length);
      updatedImages.push(
        newImages[0],
        initialImages[1],
        initialImages[2],
        initialImages[3]
      );
    } else if (habitLength >= 4 && habitLength <= 5) {
      updatedImages.push(
        newImages[0],
        newImages[1],
        initialImages[2],
        initialImages[3]
      );
    } else if (habitLength >= 6 && habitLength <= 7) {
      updatedImages.push(
        newImages[0],
        newImages[1],
        newImages[2],
        initialImages[3]
      );
    } else if (habitLength >= 8) {
      updatedImages.push(
        newImages[0],
        newImages[1],
        newImages[2],
        newImages[3]
      );
    }

    setImagesToDisplay(updatedImages);
  }, [habitDone]);

  return (
    <div>
      <h1>Мои награды</h1>
      <div className="achivements-points">
        {imagesToDisplay.map((image, index) => (
          <img
            key={index}
            className="achivement-img"
            src={image}
            alt={`Achievement ${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AchievementsComp;
