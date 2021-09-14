import React from 'react';
import Photo from '../../../assets/Images/MyPhoto.png';
import About2 from '../../../assets/Images/Gif.gif';
import About3 from '../../../assets/Images/AboutBg.jpg';
import {
  About,
  AboutContent,
  ImageContainer,
  MyPhoto,
  ContentWrapper,
  Text,
  IconsContainer,
  SkillIcon,
  IconImg,
  AboutContainer,
  Img1,
  Img2,
  Heading,
} from './AboutElements';

const Skills = [
  'https://i.postimg.cc/HkyFL0CX/PikPng.png',
  'https://i.postimg.cc/154LkhCW/CssIcon.png',
  'https://i.postimg.cc/QMgPQXCM/pngegg.png',
  'https://i.postimg.cc/jd9GKgBR/Javascript-Icon.png',
  'https://i.postimg.cc/44LZ9dkN/pngfind-com-map-marker-png-878756.png',
  'https://i.postimg.cc/tgGwn1Xf/Styled-components-icon.png',
  'https://i.postimg.cc/nLCsgkKW/icons8-material-ui-48.png',
];

const AboutSection = () => {
  return (
    <About id='about'>
      <AboutContent>
        <Img1 src={About2} />
        <Img2 src={About3} />
        <ImageContainer>
          <MyPhoto src={Photo} />
        </ImageContainer>
        <ContentWrapper>
          <AboutContainer>
            <Heading>ABOUT ME...</Heading>
            <Text>
              My name is Vladimir Ćinić and I am a 27 years old ex chef who fell
              in love with coding and taught himself how to do it.{' '}
            </Text>
            <Text>
              {' '}
              Introduction to front end development in May 2020 sparked a
              passion that none of my previous professions ever did, a passion
              that drives me to learn more and made me decide to switch careers
              and pursue my dream to become a web developer. <br /> Since then I
              dedicate most of my time to study and practice code from various
              sources such as, Udemy courses, YouTube videos, books and
              everything else I find useful.
            </Text>

            <Text>
              In the section below, You can see some of the projects I developed
              over the last year as a self-taught developer with no previous
              professional experience. <br /> Most of them are my own original
              ideas that I converted into a working application with
              technologies i am currently familiar with such as HTML5, CSS3,
              Sass, Styled Components, Material Ui, JavaScript and React.
            </Text>
          </AboutContainer>
          <IconsContainer>
            {Skills.map((icon, index) => (
              <SkillIcon key={index}>
                <IconImg src={icon} />
              </SkillIcon>
            ))}
          </IconsContainer>
        </ContentWrapper>
      </AboutContent>
    </About>
  );
};

export default AboutSection;
