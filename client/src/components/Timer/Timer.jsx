import { useState, useEffect } from 'react'

export default function Timer() {
  const [timer, setTimer] = useState(0)

  const handleSubmit = (event) => {
    event.preventDefault()
    const createTime = {
      timer
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="number" value={timer} placeholder="Enter time" onChange={(event) => setTimer(event.target.value)} />
      </form>
    </div>
  )
}
