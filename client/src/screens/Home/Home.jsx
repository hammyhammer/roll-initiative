import React from 'react'
import Layout from '../../components/Layout/Layout'
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
            </div>
          ))
        };
      </Layout >
    </div >
  )
}
