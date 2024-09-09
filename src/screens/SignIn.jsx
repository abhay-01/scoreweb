import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseconfig';
import "../styles/SignIn.css";

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/home'); 
    } catch (error) {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Sign In</h1>
        <input
          type="email"
          className="input"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="input"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="signInButton" onClick={handleSignIn}>
          Sign In
        </button>
        <p className="signupText" onClick={() => navigate('/signup')}>
          Don't have an account? Sign Up
        </p>
        <div className="links">
          <Link to="/terms" className="link">Terms of Service</Link>
          <Link to="/privacy" className="link">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
