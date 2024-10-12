import React, { useState } from "react";
import axios from "axios";
import styles from "./Signup.module.css";
import { useNavigate, Link } from "react-router-dom";

const baseUrl = "http://localhost:8069";

const Signup = () => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  // State for signup and login inputs
  const [signupData, setSignupData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    password: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleSignupInputChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleLoginInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const signupUser = async () => {
    try {
      const response = await axios.post(`${baseUrl}/create_user`, {
        full_name: signupData.fullName,
        mobile: signupData.mobile,
        email: signupData.email,
        password: signupData.password,
      });

      console.log("User created successfully:", response.data);
      navigate("/login"); // Redirect after successful signup
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const loginUser = async () => {
    try {
      const response = await axios.post(`${baseUrl}/web/login`, {
        email: loginData.email,
        password: loginData.password,
      });

      console.log("Login successful:", response.data);
      navigate("/home");
    } catch (error) {
      console.error("Error logging in user:", error);
    }
  };

  return (
    <div className={`${styles.fullbody}`}>
      <div className={`${styles.container} ${active ? styles.active : ""}`}>
        <div className={`${styles.formContainer} ${styles.signUp}`}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              signupUser();
            }}
          >
            <span className={`${styles.loginText}`}>Create Account</span>

            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={signupData.fullName}
              onChange={handleSignupInputChange}
              required
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              pattern="[0-9]{10}"
              title="Please enter a valid 10-digit phone number"
              value={signupData.mobile}
              onChange={handleSignupInputChange}
              required
              maxLength={10}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={signupData.email}
              onChange={handleSignupInputChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={signupData.password}
              onChange={handleSignupInputChange}
              required
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>

        <div className={`${styles.formContainer} ${styles.signIn}`}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              loginUser();
            }}
          >
            <span className={`${styles.loginText}`}>Login</span>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={loginData.email}
              onChange={handleLoginInputChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleLoginInputChange}
              required
            />
            <Link to="/forget">Forgot Password?</Link>
            <button type="submit">Sign In</button>
          </form>
        </div>

        {/* Toggle Container */}
        <div className={styles.toggleContainer}>
          <div className={styles.toggle}>
            <div className={`${styles.togglePanel} ${styles.toggleLeft}`}>
              <span className={`${styles.subscriberText}`}>Welcome Back!</span>

              <button
                className={styles.hidden}
                id="login"
                onClick={() => setActive(false)}
              >
                login here
              </button>
            </div>
            <div className={`${styles.togglePanel} ${styles.toggleRight}`}>
              <span className={`${styles.subscriberText}`}>
                Hello, Subscriber!
              </span>

              <button
                className={styles.hidden}
                id="register"
                onClick={() => setActive(true)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
