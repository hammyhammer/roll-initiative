import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createCharacter, getAllCharacters } from '../../services/characters'

export default function PostCharacter(props) {
  const navigate = useNavigate()
  const [characters, setCharacters] = useState([])

  const [name, setName] = useState("")
  const [hp, setHp] = useState(0)
  const [ac, setAc] = useState(0)
  const [atkMod, setAtkMod] = useState("")
  const [dmgMod, setDmgMod] = useState("")
  const [movement, setMovement] = useState("")
  const [toggle, setToggle] = useState(false)
  const { id } = useParams();
  // console.log(props.currentUser)

  // useEffect(() => {
  //   const specificUser = user.find(user => {
  //     return user.id === Number(id)
  //   })
  //   const fetchCharacters = async () => {
  //     const characters = await getAllCharacters(id)
  //     setCharacters(characters)
  //   }
  //   fetchCharacters()
  //   props.currentUser(specificUser)
  // }, [id, characters, toggle])

  const handleCharacterCreate = async (formData) => {
    await createCharacter(id, formData);
    setToggle(prevToggle => !prevToggle);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    const character = {
      name,
      hp,
      ac,
      atkMod,
      dmgMod,
      movement
    }
    handleCharacterCreate(character)
    // navigate('/characters')
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
