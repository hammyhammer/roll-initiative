import { useEffect, useState } from 'react'
import { getAllCharacters } from '../../services/characters'

export default function CharacterContainer() {
  const [characters, setCharacters] = useState([])
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const fetchCharacters = async () => {
      const characters = await getAllCharacters();
      setCharacters(characters)
    }
    fetchCharacters()
  }, [toggle])

  return (
    <div>CharacterContainer</div>
  )
}
