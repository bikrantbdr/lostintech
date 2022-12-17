import React, {useState} from 'react'
import Video from '../../videos/video3.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import { Button } from '../ButtonElements'

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1> Lost In Tech</HeroH1>
        <HeroP>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam id accusantium perspiciatis</HeroP>
        <HeroBtnWrapper>
          <Button href='https://dsc.gg/ecast' onMouseEnter={onHover} onMouseLeave={onHover} target='_blank' primary='true' dark='true' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
            Discord {hover ? <ArrowForward /> : <ArrowRight/>}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
