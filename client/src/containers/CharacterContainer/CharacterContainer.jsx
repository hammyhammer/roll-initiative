import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../screens/Home/Home';
import PostCharacter from '../../screens/PostCharacter/PostCharacter';
import { getAllCharacters } from '../../services/characters'

export default function CharacterContainer(props) {
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
    <div>
      <Routes>
        <Route path="/" element={<Home characters={characters} currentUser={props.currentUser} />} />
        <Route path="/create" element={<PostCharacter characters={characters} currentUser={props.currentUser} />} />
      </Routes>
    </div>
  )
}
