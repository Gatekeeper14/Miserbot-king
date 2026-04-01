import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);

  const startChat = async () => {
    setLoading(true);

    try {
      const res = await fetch("https://miserbot-v10-production.up.railway.app/", {
        method: "GET"
      });

      if (res.ok) {
        setLoading(false);
        alert("Backend is connected ✅");
      } else {
        setLoading(false);
        alert("Backend responded but error ❌");
      }
    } catch (err) {
      setLoading(false);
      alert("Connection failed ❌");
    }
  };

  return (
    <div style={{
      height: "100vh",
      background: "radial-gradient(circle at center, #0a0a0a, #000)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      fontFamily: "Inter, sans-serif"
    }}>

      <div style={{
        textAlign: "center",
        padding: "60px",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "20px",
        backdropFilter: "blur(20px)",
        boxShadow: "0 0 80px rgba(255,255,255,0.05)"
      }}>

        <h1 style={{
          fontSize: "48px",
          marginBottom: "10px",
          letterSpacing: "2px"
        }}>
          MISERBOT
        </h1>

        <p style={{
          color: "#aaa",
          marginBottom: "30px"
        }}>
          Intelligent Automation System
        </p>

        <button
          onClick={startChat}
          style={{
            padding: "15px 40px",
            background: "transparent",
            border: "1px solid white",
            color: "white",
            cursor: "pointer"
          }}
        >
          {loading ? "Connecting..." : "Activate System"}
        </button>

      </div>

    </div>
  );
}
 
