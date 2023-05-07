import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignupForm() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('email', email);
    alert(`Thank you for submitting your email address: ${email}`);
    navigate(`/home`);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div style={{ width: "300px", padding: "20px", borderRadius: "10px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)" }}>
        <form onSubmit={handleSubmit}>
          <label style={{ display: "block", marginBottom: "10px" }}>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} style={{ display: "block", width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
          </label>
          <button type="submit" style={{ display: "block", width: "100%", padding: "10px", borderRadius: "5px", border: "none", background: "#0077ff", color: "#fff", cursor: "pointer" }}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
