import { useState } from 'react'

export default function PostCharacter() {
  const [name, setName] = useState("")
  const [hp, setHp] = useState(0)
  const [ac, setAc] = useState(0)
  const [atkMod, setAtkMod] = useState("")
  const [dmgMod, setDmgMod] = useState("")
  const [movement, setMovement] = useState("")




  return (
    <div>PostCharacter</div>
  )
}
