import styled from "styled-components"

import colors from "../../style/colors"
import queries from "../../style/queries"

import Card from "../Card"
import success from "../../assets/icons/succeed.svg"
import camp from "../../assets/icons/camping.svg"
import airplane from "../../assets/icons/airplane.svg"
import baggage from "../../assets/icons/baggage.webp"
import film from "../../assets/icons/film-projector.webp"

const RoadSection = styled.section`
  position: relative;
  z-index: 1;
  padding: 4vw 10vw 6vw;
  background: ${colors.light};

  &::before {
    content: "";
    position: absolute;
    opacity: 0.7;
    top: 0;
    left: 50%;
    width: 5vw;
    max-width: 3rem;
    height: 100%;
    background: repeating-linear-gradient(
      to top,
      transparent,
      transparent 7vw,
      ${colors.primary} 0vw,
      ${colors.primary} 20vw
    );
  }

  @media (max-width: ${queries.medium}px) {
    padding: 5vw 8vw 7vw;
  }
  @media (max-width: ${queries.small}px) {
    padding: 5vw 4vw 7vw;
  }
`

const RoadTitle = styled.h3`
  position: relative;
  z-index: 1;
  color: ${colors.secondary};
  margin-bottom: 1rem;
`

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4vw;
`

function Roadmap() {
  return (
    <RoadSection id="roadmap">
      <RoadTitle>Roadmap</RoadTitle>
      <Cards>
        <Card
          image={success}
          year="2023"
          title={"OpenClassrooms"}
          content={`Back home, I decided to change my career and entered the exciting world of development. I am currently undergoing training as a Frontend Web Developer at OpenClassrooms.`}
        />
        <Card
          image={camp}
          year="2019 - 2021"
          title={"Australia"}
          content={`During my travels in the land of kangaroos, I experienced both the vastness of the country and the warmth of its people. In my second year of my Working Holiday Visa (PVT), the pandemic struck, and I came back to France.`}
        />
        <Card
          image={baggage}
          year="2017 - 2019"
          title={"South Korea"}
          content={`A dream come true! From working on a cruise ship, I embraced my first Working Holiday Visa (PVT). Going solo to a distant land, language barriers, and a vague cultural understanding made it a truly enriching experience.`}
        />
        <Card
          image={airplane}
          year="2014 - 2015"
          title={"Globetrotter"}
          content={`With eyes full of stars, I want to conquer the world. My first stop: Orlando, Florida! I start working in the hospitality industry in the United States, tasting the "American Dream".`}
        />
        <Card
          image={film}
          year="... - 2013"
          title={"The film realm"}
          content={`Studying cinema since high school and earning a Bachelor's degree in Performing Arts, I acquired the skills to become a multimedia 'jack-of-all-trades.' Conceiving, producing, editing, and publishing video projects are now second nature. This path led me to work as an editor at a communication agency.`}
        />
      </Cards>
    </RoadSection>
  )
}

export default Roadmap
