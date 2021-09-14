import React from 'react';
import Spinner from '../../../assets/Images/Spinner.gif';
import {
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaArrowCircleDown,
} from 'react-icons/fa';

import { BiDownArrow } from 'react-icons/bi';
import CV from '../../../assets/CV/CV.pdf';
import {
  Hero,
  SocialIcons,
  A,
  HeroContent,
  Accent,
  Span,
  Title,
  Subtitle,
  ScrollBtn,
  H2,
  ImageWrapper,
  Img,
  Btn,
  AboutArrow,
} from './HeroElements';

export const HeroSection = () => {
  return (
    <Hero id='#hero'>
      <HeroContent>
        <H2>Hello, I'm</H2>
        <Title>
          <Accent>V</Accent>ladimir <br />
        </Title>
        <Subtitle>
          Self<Span>-</Span>taught <br /> front<Span>-</Span>end developer
        </Subtitle>
        <Btn href={CV} download='CV'>
          Download CV
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </Btn>
        <ScrollBtn to={'projects'} smooth duration={1000}>
          My Work
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </ScrollBtn>
        <ImageWrapper>
          <Img src={Spinner} />
        </ImageWrapper>
        <SocialIcons>
          <li>
            <A href='https://www.linkedin.com/in/vladimir-%C4%87ini%C4%87-227326215/'>
              <FaLinkedin />
            </A>
          </li>
          <li>
            <A href='https://www.instagram.com/force_choke_me_daddy/'>
              <FaInstagramSquare />
            </A>
          </li>

          <li>
            <A href='https://github.com/Vladimir-Cinic'>
              <FaGithubSquare />
            </A>
          </li>
        </SocialIcons>
        <AboutArrow to={'about'} smooth duration={1000}>
          <BiDownArrow />
        </AboutArrow>
      </HeroContent>
    </Hero>
  );
};

export default HeroSection;
