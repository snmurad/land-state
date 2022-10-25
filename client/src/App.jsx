import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react"

import { getTest } from './functions/test'

function App() {
  const [data, setData] = useState("Hello World")
  useEffect(() => {
    getTest().then((res) => {
      setData(res.message)
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1>{data}</h1>
      </header>
    </div>
  );
}

export default App;
