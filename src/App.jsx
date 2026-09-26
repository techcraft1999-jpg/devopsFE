import { useState } from 'react'
import axios from "axios"

function App() {
  const [count, setCount] = useState('')

  return (
    <>
      <div style={{
        display: "flex",
        height: "50px",
        color: "white",
        backgroundColor: "black"
      }}>Welcome to my site</div>
      <button onClick={() => {
        axios.get('https://devopsbe-zipz.onrender.com/sayHello').then((res) => {
          setCount(res.data.msg)
        }).catch((err) => {
          console.log(err)
        })
      }}>CLick here to call API  {count}</button>

    </>
  )
}

export default App
