import { useState } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState("");

  const generate = (length = 8) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    console.log(result);
    setPassword(result);
  }

  return (
    <>
      <h2>Password Generator</h2>
      <div style={{display: "flex", gap: "10px"}}>
        <input type="text" value={password} readOnly/>
        <button onClick={() => {generate()}}>Generate</button>
      </div>
    </>
  )
}

export default App
