import styled from "styled-components"

import Hero from "../Hero"

const Landing = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`

function Home() {
  return (
    <Landing id="home">
      <Hero />
    </Landing>
  )
}

export default Home
