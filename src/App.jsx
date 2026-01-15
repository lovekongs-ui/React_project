import { useState } from 'react'
import './App.css'

import RegistrationForm from "./components/RegistrationForm";
import Counter from "./History";
import MyComponent from "./MyComponent.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <hr />

      <RegistrationForm />

      <hr />

      <Counter />

      <hr />

      <MyComponent />
    </>
  )
}

export default App
