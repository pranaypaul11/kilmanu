import axios from "axios";
const baseUrl = "http://localhost:8069";

const token = localStorage.getItem("jwt_token");

const userInfo = {
  signupUser: async () => {
    try {
      const response = await axios.post(`${baseUrl}/create_user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error creator User:", error);
    }
  },
  loginUser: async () => {
    try {
      const response = await axios.post(`${baseUrl}/web/login`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error Login User:", error);
    }
  },
  forgetPassword: async () => {
    try {
      const response = await axios.post(`${baseUrl}/forgot_password`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error Sending Email:", error);
    }
  },
};

export default userInfo;
