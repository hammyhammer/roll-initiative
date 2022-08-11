import { useState, useEffect } from 'react'

export default function Timer() {
  const [timer, setTimer] = useState(10)

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => setTimer(timer - 1), 1000)
    }
  }, [])

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   const createTime = {
  //     timer
  //   }
  // }

  return (
    <div>
      {timer}
      {/* <form onSubmit={handleSubmit}>
        <input type="number" value={timer} placeholder="Enter time" onChange={(event) => setTimer(event.target.value)} />
      </form> */}
    </div>
  )
}
