import styled from "styled-components"

import colors from "../../style/colors"
import queries from "../../style/queries"

const AboutSection = styled.section`
  background: ${colors.secondary};
  min-height: 50vh;
  padding: 4vw 0 22vw 0;

  @media (max-width: ${queries.medium}px) {
    padding: 2vw 0 22vw 0;
  }
  @media (max-width: ${queries.small}px) {
    padding: 8vw 4vw 12vw;
  }
`

const AboutContainer = styled.div`
  margin: 0 6vw 0 53vw;

  @media (max-width: ${queries.medium}px) {
    margin: 2rem 8vw;
  }
  @media (max-width: ${queries.small}px) {
    margin: 0;
  }
`

const AboutTitle = styled.h3`
  margin-bottom: 1rem;
  color: ${colors.light};
  text-align: left;
`

const AboutContent = styled.p`
  color: ${colors.light};
`

function About() {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <AboutTitle>About</AboutTitle>
        <AboutContent>
          {`After spending about 10 years working in hospitality, I made the decision to pursue a reconversion in web development, and it has been one of the best decisions I have ever made. I thrive on creativity, problem solving, and the challenge of constantly learning and evolving in this fast-paced industry. Every day brings new and exciting opportunities to satisfy my curiosity and fuel my new passion. So come along on this journey with me, and let's explore the world of frontend development together!
        `}
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  )
}

export default About
