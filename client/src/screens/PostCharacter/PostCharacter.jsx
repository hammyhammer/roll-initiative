import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { createCharacter } from '../../services/characters'

export default function PostCharacter() {
  const [name, setName] = useState("")
  const [hp, setHp] = useState(0)
  const [ac, setAc] = useState(0)
  const [atkMod, setAtkMod] = useState("")
  const [dmgMod, setDmgMod] = useState("")
  const [movement, setMovement] = useState("")
  const [toggle, setToggle] = useState(false)
  const { id } = useParams();

  const handleCharacterCreate = async (formData) => {
    await createCharacter(id, formData);
    setToggle(prevToggle => !prevToggle);
  };


  return (
    <div>PostCharacter</div>
  )
}
