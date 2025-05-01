import { useState } from 'react'
import './App.css'
import { ToastContainer, toast, Slide } from 'react-toastify';

function App() {
  const [password, setPassword] = useState("");
  const [actions, setActions] = useState({lenght: 8, letters: true, numbers: true, special: true});

  const generate = (length = actions.lenght) => {
    const characters = "" +
      (actions.letters ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' : "") + 
      (actions.numbers ? "1234567890" : "") + 
      (actions.special ? "!@#$%^&*()+_-" : "");
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    setPassword(result);
  }

  return (
    <>
      <h2>Password Generator</h2>
      <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
        <div style={{display: "flex", gap: "10px"}}>
          <input placeholder='Lenght' type="text" value={actions.lenght} onChange={(v) => {setActions({...actions, lenght: v.target.value})}}/>
          <button onClick={() => {setActions({...actions, letters: !actions.letters})}}>Letters: {actions.letters ? ("on") : ("off")}</button>
          <button onClick={() => {setActions({...actions, numbers: !actions.numbers})}}>Numbers: {actions.numbers ? ("on") : ("off")}</button>
          <button onClick={() => {setActions({...actions, special: !actions.special})}}>Special: {actions.special ? ("on") : ("off")}</button>
        </div>
        <div style={{display: "flex", gap: "10px"}}>
          <input onClick={() => {navigator.clipboard.writeText(password); toast.success("Copied!")}} style={{width: "100%"}} type="text" value={password} readOnly/>
          <button onClick={() => {generate()}}>Generate</button>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Slide}
      />
    </>
  )
}

export default App
