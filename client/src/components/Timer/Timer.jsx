import { useState, useEffect } from 'react'

export default function Timer({ max }) {
  const [timer, setTimer] = useState(max)

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => setTimer(timer - 1), 1000)
    }
  }, [timer])

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
