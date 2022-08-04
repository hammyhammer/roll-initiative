import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createCharacter } from '../../services/characters'

export default function PostCharacter() {
  const navigate = useNavigate()

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

  const handleSubmit = (event) => {
    const character = {
      name,
      hp,
      ac,
      atkMod,
      dmgMod,
      movement
    }
    handleCharacterCreate(character)
    navigate('/characters')
  }


  return (
    <div>
      test
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} placeholder="Name of Character" onChange={(event) => setName(event.target.value)} />
        <input type="text" value={hp} placeholder="HP" onChange={(event) => setHp(event.target.value)} />
        <input type="text" value={ac} placeholder="AC" onChange={(event) => setAc(event.target.value)} />
        <input type="text" value={atkMod} placeholder="Attack Mod" onChange={(event) => setAtkMod(event.target.value)} />
        <input type="text" value={dmgMod} placeholder="Damage Mod" onChange={(event) => setDmgMod(event.target.value)} />
        <input type="text" value={movement} placeholder="Movement" onChange={(event) => setMovement(event.target.value)} />
        <button>save</button>
      </form>
    </div>
  )
}
