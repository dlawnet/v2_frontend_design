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
import NotFound from "./components/constant/NotFound";
import Spinner from "./components/constant/Spinner";
import { useEffect, useState } from "react";

function App() {
  const location = useLocation();
  const [initialLoading, setInitialLoading] = useState(true);

  const hasVisited = sessionStorage.getItem("hasVisited");

  useEffect(() => {
    if (!hasVisited) {
      const timer = setTimeout(() => {
        setInitialLoading(false);
        sessionStorage.setItem("hasVisited", "true");
      }, 5000);
      return () => clearTimeout(timer);
    } else {
      setInitialLoading(false);
    }
  }, []);

  if (initialLoading) {
    return <Spinner />;
  }

  // useEffect(() => {
  //     const hasVisited = localStorage.getItem("hasVisited");

  //     if (!hasVisited) {
  //       const timer = setTimeout(() => {
  //         setInitialLoading(false);
  //         localStorage.setItem("hasVisited", "true");
  //       }, 6000);
  //       return () => clearTimeout(timer);
  //     } else {
  //       setInitialLoading(false);
  //     }
  //   }, []);

  //   if (initialLoading) {
  //     return <Spinner />;
  //   }
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

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
