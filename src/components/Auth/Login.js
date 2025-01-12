import React, { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import './Login.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      navigate("/dashboard");
    } catch (error) {
      console.error(error.message);
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="login-container">
      <header className="header">
        <center>
        VS Pet Care
        </center>
      
      </header>
      <div className="login-box">
        <h1>LOGIN</h1>
    <form onSubmit={handleLogin}>
    <br></br>
      <center>
      <input className="inbox-box" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      
      <input className="inbox-box" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      </center>
      <a href="#" className="forgot-password">Forgot Password?</a>
      <br></br>
      <button type="submit">Login</button>
      <p className="p"> Don't you have an account? <a href="/Signup" className="sign-up">SignUp</a></p>
    </form>
    </div>
    </div>
  );
}

export default Login;