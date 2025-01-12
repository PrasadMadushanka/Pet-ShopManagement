import { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import './Login.css';

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful!");
    } catch (error) {
      console.error(error.message);
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
      <h1>SIGNUP</h1>
    <form onSubmit={handleSignup}>
    <br></br>
    <center>
      <input className="inbox-box" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input className="inbox-box" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      </center>
      <br></br>
      <button type="submit">Sign Up</button>
      <p className="p"> Already you have an account? <a href="/" className="sign-up">Log in</a></p>
  
    </form>
    </div>
    </div>
  );
}

export default Signup;
