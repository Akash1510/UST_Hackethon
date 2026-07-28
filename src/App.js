import NavBar from "./Comonenets/NavBar"; // Make sure the import path is correct
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import UploadImage from "./Comonenets/UploadImage";
import LoginAgronomist from "./Comonenets/loginagronomist";
import AgronomistDashboard from "./Comonenets/AgronomistDashboard";
function App() {
  return (
    <>

      <Router basename="/UST_Hackethon">

        <Routes>
          <Route exact path="/" element={<NavBar />} />
          <Route exact path="/uploadImage" element={<UploadImage />} />
          <Route exact path="/login" element={<LoginAgronomist />} />
          <Route exact path="/dashboard" element={< AgronomistDashboard/>} />
    
        </Routes>
      </Router>
    </>
  );
}

export default App;
