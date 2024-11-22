import "../styles/main.scss";
import mascotAdvice from "../assets/images/helpyAdvice.png";
const Mascot = () => {
  return (
    <div>
      <img className="mascot" src={mascotAdvice} alt="Mascot" />
    </div>
  );
};

export default Mascot;
