import "./styles/main.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WorkPage from "./pages/WorkPage";
import Main from "./pages/Main";
import Achivements from "./pages/Achivements";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/habits" element={<WorkPage />} />
        <Route path="/achivements" element={<Achivements />} />
      </Routes>
    </Router>
  );
}

export default App;
