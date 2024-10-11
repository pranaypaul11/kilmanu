import React, { useState } from "react";
import styles from "./forgetPassword.module.css"; // Importing CSS module

const ForgotPassword = () => {
  const [active, setActive] = useState(false);
  
  return (
    <div className={`${styles.fullbody}`}>
      <div className={`${styles.container} ${active ? styles.active : ""}`}>
        {/* Forgot Password Form */}
        <div className={`${styles.formContainer} ${styles.forgotPassword}`}>
          <form action="#">
            <h1>Forgot Password</h1>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.icon}>
                <i className="fa-brands fa-google"></i>
              </a>
              <a href="#" className={styles.icon}>
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className={styles.icon}>
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="#" className={styles.icon}>
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
            <span className={`${styles.planeText}`}>Enter your email to receive a password reset link</span>
            <input type="email" placeholder="Email" required />
            <button type="submit">Send Reset Link</button>
          </form>
        </div>

      
       
      </div>
    </div>
  );
};

export default ForgotPassword;
