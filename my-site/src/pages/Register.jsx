import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Register.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const nav = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch('http://localhost:3000/users');
    const users = await res.json();
    if (users.find(u=>u.email===email)) { setError('Email is already registered'); return; }
    const createRes = await fetch('http://localhost:3000/users',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,password})});
    if(createRes.ok) { await login(email,password); nav('/home'); } else setError('Registration failed');
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        {error && <p className="error">{error}</p>}
        <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required />
        <button type="submit">Register</button>
        <p className="link" onClick={()=>nav('/login')}>Already have an account? Login</p>
      </form>
    </div>
  );
}