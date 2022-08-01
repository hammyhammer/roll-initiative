import React from 'react'
import Layout from '../../components/Layout/Layout'

export default function Home(props) {
  console.log(props.currentUser)
  console.log(props.characters)
  return (
    <div>
      <Layout>
        <header>Main Page</header>
        {/* <div>
          {props.characters.map(character => {
            <div key={character.id}>
              {
                <p>
                  {character.name}
                </p>
              }
            </div>
          })}
        </div> */}
      </Layout >
    </div >
  )
}
