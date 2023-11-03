import { useEffect, useState } from "react"
import styled from "styled-components"

import colors from "../style/colors"
import queries from "../style/queries"

import burger from "../assets/icons/hamburger.svg"

const Header = styled.header`
  transform-origin: left top;
  transform: rotate(270deg);
  position: fixed;
  bottom: -2.5rem;
  z-index: 999;
  mix-blend-mode: difference;

  @media (max-width: ${queries.small}px) {
    width: 100vw;
    mix-blend-mode: initial;
    transform-origin: initial;
    transform: rotate(0deg);
    top: 0;
    bottom: initial;
  }
`

const BurgerContainer = styled.button`
  display: none;

  @media (max-width: ${queries.small}px) {
    display: block;
    position: fixed;
    border: none;
    background: ${colors.light};
    width: fit-content;
    height: 3.5rem;
    border-radius: 50%;
    opacity: 0.8;
    z-index: 999;
    left: 0.7rem;
    top: 0.7rem;
    transform: rotate(0deg);
    transition: 500ms;

    &.burgerChange {
      transform: rotate(90deg);
    }
  }
`

const BurgerImg = styled.img`
  width: 3.5rem;
`

const Nav = styled.nav`
  @media (max-width: ${queries.small}px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transform: translateY(-100%);
    transition: 500ms;

    &.visible {
      transform: translateY(0);
    }
  }
`

const Menu = styled.ul`
  display: flex;
  gap: 1.5rem;
  margin: 1vw 6vh 0;

  @media (max-width: ${queries.small}px) {
    background: ${colors.light};
    margin: -0.5rem 0 0 0;
    flex-direction: column;
    align-items: center;
    padding: 5rem;
    border-bottom: 10px solid ${colors.secondary};
  }
`

const MenuItem = styled.li`
  position: relative;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 700;
  white-space: nowrap;
  color: ${colors.primary};

  &::after {
    content: " ";
    display: block;
    position: absolute;
    left: 0;
    bottom: 40%;
    width: 0%;
    height: 3px;
    background: ${colors.primary};
    transition: width 0.3s ease 0s;
  }

  &:hover::after {
    width: 100%;
  }
`

const ProgressWrapper = styled.div`
  position: fixed;
  background-color: ${colors.secondary};
  height: 10px;
  z-index: 999;
  mix-blend-mode: difference;

  @media (max-width: ${queries.small}px) {
    mix-blend-mode: initial;
  }
`

function Navigation() {
  const [click, setClick] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)
  const [burgerOpen, setburgerOpen] = useState(false)

  const toggleBurger = () => {
    setburgerOpen(!burgerOpen)
  }

  const scrollTo = id => {
    let element = document.getElementById(id)
    element.scrollIntoView({
      behavior: "smooth"
    })
    setClick(!click)
  }

  // Progression bar
  const onScroll = () => {
    const windowSize = document.documentElement.scrollTop
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    const scroll = (windowSize / height) * 100

    setScrollTop(scroll)
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <ProgressWrapper style={{ width: `${scrollTop}%` }} />

      <Header>
        <BurgerContainer
          onClick={toggleBurger}
          className={burgerOpen && "burgerChange"}>
          <BurgerImg src={burger} alt="menu" />
        </BurgerContainer>
        <Nav className={burgerOpen && "visible"}>
          <Menu>
            <MenuItem
              onClick={() =>
                window.scroll({
                  top: 0,
                  behavior: "smooth"
                })
              }>
              Home
            </MenuItem>
            <MenuItem onClick={() => scrollTo("about")}>About</MenuItem>
            <MenuItem onClick={() => scrollTo("roadmap")}>Roadmap</MenuItem>
            <MenuItem onClick={() => scrollTo("showcase")}>Showcase</MenuItem>
            <MenuItem onClick={() => scrollTo("contact")}>Contact</MenuItem>
          </Menu>
        </Nav>
      </Header>
    </>
  )
}

export default Navigation
