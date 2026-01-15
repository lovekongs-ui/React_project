import { useState } from 'react'

import './App.css'

import RegistrationForm from "./components/RegistrationForm";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
      </p>

      <hr />

      { }
      <RegistrationForm />
    </>
  )
}

export default App
