import React from 'react'
import Layout from '../../components/Layout/Layout'

export default function Home(props) {
  console.log(props.currentUser)
  console.log(props.characters.name)
  return (
    <div>
      <Layout>
        <header>Main Page</header>
        <div>
          {props.characters &&
            props.characters.map(character => {
              <div key={character?.id}>
                {
                  <p>
                    {character.name}
                  </p>
                }
              </div>
            })}
        </div>
      </Layout >
    </div >
  )
}
