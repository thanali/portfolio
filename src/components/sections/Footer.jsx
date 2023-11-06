import styled from "styled-components"

import colors from "../../style/colors"

import github from "../../assets/icons/github.webp"
import linkedin from "../../assets/icons/linkedin.webp"
import icon from "../../assets/icon.webp"
import Form from "../../components/Form"
import queries from "../../style/queries"

const FooterContainer = styled.footer`
  position: relative;
  z-index: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: ${colors.secondary};
  color: ${colors.light};
`

const Socials = styled.div`
  background: ${colors.light};
  border-top: 5px solid ${colors.primary};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  padding: 1rem;

  @media (max-width: ${queries.small}px) {
    justify-content: space-around;
    gap: initial;
  }

  img {
    width: 50px;
  }
  a {
    img {
      width: 35px;
    }
  }
`

function Footer() {
  return (
    <FooterContainer id="contact">
      <Form />
      <Socials>
        <a href="https://www.linkedin.com/in/nathalie-lebon-78490a180">
          <img src={linkedin} alt="lien linkedin" />
        </a>
        <img src={icon} alt="logo" />
        <a href="https://github.com/thanali">
          <img src={github} alt="lien gitHub" />
        </a>
      </Socials>
    </FooterContainer>
  )
}

export default Footer
