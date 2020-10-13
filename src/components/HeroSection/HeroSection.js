import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrap, ArrowForward, ArrowRight } from './HeroEle'
import { Button } from '../ButtonEle'

const HeroSection = () => {

  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>Sign up for a new account today and recieve $250 in credit towards your next payment.</HeroP>
        <HeroBtnWrap>
          <Button to='signup' 
          onMouseEnter={onHover} 
          onMouseLeave={onHover}
          smooth={true}
          duration={500}
          spy={true}
          exact='true'
          offset={-80}          
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrap>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
