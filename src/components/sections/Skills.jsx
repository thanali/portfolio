import styled from "styled-components"

import colors from "../../style/colors"
import queries from "../../style/queries"

const SkillSection = styled.section`
  display: flex;
  align-items: flex-end;
  position: relative;
  z-index: 2;
  clip-path: polygon(0 100%, 100% 100%, 100% 8rem, 0 0);
  background: ${colors.primary};
  margin-top: -22vw;
  padding: 4vw 10vw;

  @media (max-width: ${queries.medium}px) {
    clip-path: polygon(0px 100%, 100% 100%, 100% 10%, 0px 0px);
    padding: 2vw 8vw 8vw;
  }
  @media (max-width: ${queries.small}px) {
    clip-path: initial;
    margin-top: initial;
    padding: 8vw 4vw 12vw;
  }
`

const SkillsContainer = styled.div`
  margin-top: 8vw;

  @media (max-width: ${queries.small}px) {
    margin: 0;
  }
`

const SkillsTitle = styled.h3`
  color: ${colors.light};
  margin-bottom: 1rem;
`

const SkillsList = styled.div`
  display: flex;
  gap: 3vw;

  @media (max-width: ${queries.medium}px) {
    flex-direction: column;
  }
`

const SkillContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;
  flex-wrap: wrap;
  padding: 1rem;
  border-radius: 20px;
  text-align: center;

  @media (max-width: ${queries.small}px) {
    padding: 0.7rem;
  }

  h4 {
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 700;

    @media (max-width: ${queries.small}px) {
      font-size: 1.5rem;
    }
  }
  span {
    flex: 1;
    padding: 0.8rem 1rem;
    height: 50px;
    border-radius: 10px;
    display: flex;
    width: fit-content;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    font-weight: 900;
    font-size: 1.6rem;

    @media (max-width: ${queries.small}px) {
      font-size: 1.2rem;
      height: 40px;
    }
  }
`

const Tools = styled(SkillContainer)`
  background: ${colors.secondary};
  h4 {
    color: ${colors.light};
  }
  span {
    background: ${colors.light};
    color: ${colors.secondary};
  }
`

const SoftSkills = styled(SkillContainer)`
  background: ${colors.light};
  h4 {
    color: ${colors.secondary};
  }
  span {
    background: ${colors.secondary};
    color: ${colors.light};
  }
`

function Skills() {
  return (
    <SkillSection id="skills">
      <SkillsContainer>
        <SkillsTitle>Skills</SkillsTitle>
        <SkillsList>
          <Tools className="tools">
            <h4>Tools</h4>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Redux</span>
            <span>SASS</span>
            <span>Jest</span>
            <span>SEO</span>
            <span>Figma</span>
            <span>GitHub</span>
            <span>Swagger</span>
          </Tools>
          <SoftSkills className="softSkills">
            <h4>Soft Skills</h4>
            <span>Communication</span>
            <span>Adaptation</span>
            <span>Curiosity</span>
            <span>Teamwork</span>
            <span>Patience</span>
            <span>Autonomy</span>
            <span>Responsible</span>
            <span>Problems Solving</span>
          </SoftSkills>
        </SkillsList>
      </SkillsContainer>
    </SkillSection>
  )
}

export default Skills
