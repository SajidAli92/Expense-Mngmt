import React, { useEffect, useState } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Layout/Spinner";
import "../styles/LoginPage.css";
import LogoImg from "../assets/EMS_logo.png";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const submitHandler = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        "http://localhost:8080/api/v1/users/login",
        values
      );
      setLoading(false);
      message.success("Login successful");
      localStorage.setItem(
        "user",
        JSON.stringify({ ...data.user, password: "" })
      );
      navigate("/");
    } catch (error) {
      setLoading(false);
      message.error("Something went wrong");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="login-container">
      {loading && <Spinner />}
      <div className="login-box">
        <div className="logo">
          <img src={LogoImg} alt="Logo" />
        </div>
        <h2 className="login-title">Login Here</h2>

        <Form layout="vertical" onFinish={submitHandler}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <Input type="email" placeholder="Enter your email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>
          <div className="form-actions">
            <Link to="/register" className="register-link">
              Don't have an account? Register here
            </Link>
            <button type="submit" className="login-button">
              Login
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
