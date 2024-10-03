import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import DashboardLayouts from "./components/DashboardLayouts";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Banks from "./components/dashboard/Banks";
import Welcome from "./components/dashboard/Welcome";
import Eventdiary from "./components/dashboard/Eventdiary";
import Panel from "./components/dashboard/Panel";
import MootCourts from "./components/dashboard/MootCourts";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="about" exact element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Signup />} />
        <Route path="contact" element={<Contact />} />

        <Route element={<DashboardLayouts />}>
          <Route path="welcome" index element={<Welcome />} />
          <Route path="banks" element={<Banks />} />
          <Route path="events" element={<Eventdiary />} />
          <Route path="panel" element={<Panel />} />
          <Route path="moots" element={<MootCourts />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
