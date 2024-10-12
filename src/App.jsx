import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css"; // Global styles
import Home from "./components/Home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Signup from "./components/user/Signup";
import ForgotPassword from "./components/user/ForgetPassword";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

function App() {
  const location = useLocation();

  const hideNavbarPaths = ["/login", "/forget"];

  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  };

  const onScroll = () => {
    const scrollElements = document.querySelectorAll(".scroll-element");
    scrollElements.forEach((el) => {
      if (isInViewport(el)) {
        el.classList.add("in-view");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div>
      {!hideNavbarPaths.includes(location.pathname)  }
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/login" element={<Signup />} />
        <Route path="/forget" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

const MainApp = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default MainApp;
