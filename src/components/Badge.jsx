import { useEffect } from "react"
import { gsap } from "gsap"
import styled from "styled-components"

import colors from "../style/colors"
import queries from "../style/queries"

import user from "../assets/icons/user.svg"
import hair from "../assets/icons/hair.svg"
import harry from "../assets/icons/harry-potter.svg"
import bow from "../assets/icons/bow-tie.svg"

const BadgeContainer = styled.div`
  position: relative;
  border: 5px solid ${colors.primary};
  border-radius: 50%;
  background: ${colors.secondary};
  width: 40vw;
  height: 40vw;
  // max-width: 40rem;
  // max-height: 40rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${queries.medium}px) {
    width: 45vw;
    height: 45vw;
  }
  @media (max-width: ${queries.small}px) {
    width: 70vw;
    height: 70vw;
  }
`

const User = styled.img`
  width: 60%;
`

const Outfits = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`

const Hair = styled.img`
  max-width: 55%;
  position: relative;
  left: 22%;
  top: 6%;
`

const Harry = styled.img`
  max-width: 53%;
  position: relative;
  left: 23%;
  top: -52%;
`

const Bow = styled.img`
  max-width: 50%;
  position: relative;
  left: 25%;
  top: -67%;
`

function Badge() {
  // Badge animation
  const onLoad = () => {
    gsap.defaults({
      duration: 0.3,
      opacity: 0
    })

    const tl2 = gsap.timeline()
    tl2.fromTo(".hair", { x: -50 }, { x: 0, opacity: 1 }, 1)
    tl2.to(".hair", { x: 50 }, "+=1.5")
    tl2.fromTo(".harry", { x: -50 }, { x: 0, opacity: 1 })
    tl2.to(".harry", { x: 50 }, "+=1.5")
    tl2.fromTo(".bow", { x: -50 }, { x: 0, opacity: 1 })
    tl2.to(".bow", { x: 50 }, "+=1.5")
    tl2.fromTo(".hair", { x: 0, opacity: 0 }, { opacity: 1 })
  }

  useEffect(() => {
    onLoad()
  }, [])

  return (
    <BadgeContainer className="badge">
      <User src={user} alt="User Logo" />
      <Outfits className="outfits">
        <Hair src={hair} alt="Hair Logo" className="hair" />
        <Harry src={harry} alt="Harry Logo" className="harry" />
        <Bow src={bow} alt="Bow Logo" className="bow" />
      </Outfits>
    </BadgeContainer>
  )
}

export default Badge
