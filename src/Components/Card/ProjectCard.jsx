import React from 'react';
import GifImage from '../../assets/Images/Gif.gif';
import { useGlobalContext } from '../../Context';
import {
  Card,
  CardHeader,
  Image,
  CardFooter,
  CardTitle,
  IconsContainer,
  Icon,
  Btn,
  IconImg,
} from './CardElements';

const ProjectCard = ({ id, title, thumbnailImage, tech }) => {
  const { handleOpenModal } = useGlobalContext();
  return (
    <Card>
      <CardHeader>
        <Image src={thumbnailImage} />
      </CardHeader>
      <CardFooter>
        <CardTitle>{title}</CardTitle>
        <IconsContainer>
          {tech.map((icon, i) => (
            <Icon key={i}>
              <IconImg src={icon} />
            </Icon>
          ))}
        </IconsContainer>
        <Btn onClick={() => handleOpenModal(id)}>
          Details
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </Btn>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
