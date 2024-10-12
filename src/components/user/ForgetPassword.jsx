import React, { useState } from "react";
import axios from "axios"; // Import axios for API calls
import styles from "./forgetPassword.module.css"; // Importing CSS module

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8069/forgot_password",
        {
          email: email,
        }
      );

      setMessage("Password reset link sent! Check your email.");
    } catch (error) {
      console.error("Error sending email:", error);
      setMessage("Error sending reset link. Please try again.");
    }
  };

  return (
    <div className={`${styles.fullbody}`}>
      <div className={`${styles.container}`}>
        {/* Forgot Password Form */}
        <div className={`${styles.formContainer} ${styles.forgotPassword}`}>
          <form onSubmit={handleSubmit}>
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
            <span className={`${styles.planeText}`}>
              Enter your email to receive a password reset link
            </span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Send Reset Link</button>

            {message && <p>{message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
