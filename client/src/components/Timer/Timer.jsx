import { useState, useEffect } from 'react'
import timercss from './Timer.module.css'
export default function Timer() {
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => setTimer(timer - 1), 1000)
    }
  }, [timer])

  const handleSubmit = (event) => {
    event.preventDefault()
    const createTime = {
      timer
    }
  }

  return (
    <div className={timercss.timer}>
      <h5 className={timercss.clock}>{timer}</h5>
      <form onSubmit={handleSubmit}>
        <input type="number" value={timer} placeholder="Enter time" onChange={(event) => setTimer(event.target.value)} />
      </form>
    </div>
  )
}
