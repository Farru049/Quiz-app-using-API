import { useState } from "react";
import PropTypes from "prop-types";

export function StartPage({ onStart }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) onStart(email);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px",color:"white",display:"flex",flexDirection:"column",alignItems:"center",height:"100vh",justifyContent:"center" }}>
      <h1>Welcome to the Quiz App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            padding: "10px",
            fontSize: "16px",
            marginBottom: "10px",
            width: "300px",
            
          }}
        />
        <br />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            cursor: "pointer",
            marginTop: "15px",
          }}
        >
          Start Quiz
        </button>
      </form>
    </div>
  );
}

StartPage.propTypes = {
  onStart: PropTypes.func.isRequired,
};