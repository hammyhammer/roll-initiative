import React from 'react'
import Layout from '../../components/Layout/Layout'

export default function Home(props) {
  console.log(props.currentUser)
  console.log(props.characters)
  return (
    <div>
      <Layout>
        <header>Main Page</header>
      </Layout>
    </div>
  )
}
