import React from 'react'
import Layout from '../../components/Layout/Layout'
import PostCharacter from '../PostCharacter/PostCharacter'
export default function Home(props) {
  // console.log(props.currentUser)
  // console.log(props.characters)
  let characters = props.characters
  console.log(characters)

  return (
    <div>
      <Layout>
        <h3>Main Page</h3>
        {
          characters.map(character => (
            <div key={character.id}>
              <h2>{character.name}</h2>
              <p>{`Current HP: ${character.hp}`}</p>
              <p>{`Armor Class: ${character.ac}`}</p>
              <p>{`Attack Modifier: ${character.atk_mod}`}</p>
              <p>{`Damage Modifier: ${character.dmg_mod}`}</p>
              <p>{`Movement: ${character.movement}`}</p>
              <PostCharacter />

            </div>
          ))
        };
      </Layout >
    </div >
  )
}
