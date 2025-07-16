import React, { useState } from 'react';
import LoginDiv from '../components/Login';
import Register from '../components/Register';
import "../App.css";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <div className="auth-box">
        <h1>InstaView</h1>
        {isLogin ? <LoginDiv /> : <Register />}

        <div className="toggle-message">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <span onClick={() => setIsLogin(false)}>Register</span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span onClick={() => setIsLogin(true)}>Login</span>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
