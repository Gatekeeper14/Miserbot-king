export default function Home() {
  const startChat = async () => {
    const res = await fetch("https://miserbot-v10-production.up.railway.app/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: "Hello MiserBot"
      })
    });

    const data = await res.json();
    alert(data.reply);
  };

  return (
    <div style={{
      background: "black",
      color: "white",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <h1>MiserBot</h1>
      <button onClick={startChat}>Start AI</button>
    </div>
  );
}
