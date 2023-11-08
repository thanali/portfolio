import { useEffect } from "react"
import styled from "styled-components"
import { gsap } from "gsap"
import { TextPlugin } from "gsap/TextPlugin"

import colors from "../style/colors"
import queries from "../style/queries"

import Badge from "./Badge"

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 5vw;
  margin: 0 10vw;

  @media (max-width: ${queries.medium}px) {
    flex-direction: column;
    align-items: center;
  }
`

const SubTitle = styled.div`
  font-size: 3vw;
  font-weight: 500;
  width: 35vw;
  height: 25vw;

  @media (max-width: ${queries.medium}px) {
    font-size: 4vw;
    width: 80vw;
    height: 30vh;
    margin-top: 2vw;
    text-align: center;
  }

  @media (max-width: ${queries.small}px) {
    font-size: 7vw;
    height: 35vh;
  }

  h1 {
    font-size: 4vw;
    font-weight: 700;
    color: ${colors.primary};

    @media (max-width: ${queries.medium}px) {
      font-size: 5vw;
    }
    @media (max-width: ${queries.small}px) {
      font-size: 8vw;
    }
  }

  h2.profession {
    font-size: 3vw;
    font-weight: 700;
    color: ${colors.secondary};
    text-transform: uppercase;

    @media (max-width: ${queries.medium}px) {
      font-size: 4vw;
    }
    @media (max-width: ${queries.small}px) {
      font-size: 7vw;
    }
  }

  p.fact {
    font-size: 3vw;
    font-weight: 700;
    color: ${colors.primary};

    @media (max-width: ${queries.medium}px) {
      font-size: 4vw;
    }
    @media (max-width: ${queries.small}px) {
      font-size: 7vw;
    }
  }
`

function Hero() {
  // Badge effect on scroll
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.innerWidth > queries.medium) {
        const distance = window.scrollY
        const badge = document.querySelector(".badge")
        badge.style.transform = `translateY(${distance * 0.9}px)`

        document.querySelector(".hero-text").style.transform = `translateY(${
          distance * -0.2
        }px)`
      }
    })
  }, [])

  // Text typing
  useEffect(() => {
    gsap.registerPlugin(TextPlugin)
    gsap.defaults({
      opacity: 1
    })

    const tl = gsap.timeline()
    tl.to(".intro", {
      duration: 1,
      text: "Hi ! I am , "
    })
    tl.to(".name", {
      duration: 2,
      text: " Nathalie Lebon, "
    })
    tl.to(".profession", {
      duration: 2,
      text: "frontend developer "
    })
    tl.to(".fact", {
      duration: 2,
      text: "and your next contact in favorite !"
    })
  }, [])

  return (
    <HeroContainer>
      <Badge />
      <SubTitle className="hero-text">
        <p className="intro"></p>
        <h1 className="name"></h1>
        <h2 className="profession"></h2>
        <p className="fact"></p>
      </SubTitle>
    </HeroContainer>
  )
}

export default Hero
