import React, { useState } from "react";
import styles from "./Signup.module.css"; // Importing CSS module
import { useNavigate,Link } from "react-router-dom";


const Signup = () => {
  const [active, setActive] = useState(false);
  const navigate=useNavigate()

  return (
    <div className={`${styles.fullbody}`}>
      <div className={`${styles.container} ${active ? styles.active : ""}`}>
        {/* Sign Up Form */}
        <div className={`${styles.formContainer} ${styles.signUp}`}>
          <form action="#">
            <span className={`${styles.loginText}`}>Create Account</span>

            <input type="text" placeholder="Full Name" />
            <input
              type="tel"
              placeholder="Mobile Number"
              pattern="[0-9]{10}" // Accept only 10 digits
              title="Please enter a valid 10-digit phone number"
              required // Makes this field mandatory
              maxLength={10}
            />  
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="button">Sign Up</button>
          </form>
        </div>

        {/* Sign In Form */}
        <div className={`${styles.formContainer} ${styles.signIn}`}>
          <form action="#">
            <span className={`${styles.loginText}`}>Login</span>

            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
             <Link to="/forget" >
              Forgot Password?
            </Link>
            <button type="button">Sign In</button>
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
