import React from 'react';
import Gif1 from '../../../assets/Images/Circle1.gif';
import Gif2 from '../../../assets/Images/Circle2.gif';
import { data } from '../../../data';
import { Heading } from '../SectionElements';
import {
  Projects,
  ProjectsGrid,
  Img1,
  Img2,
  Img3,
  Img4,
} from './ProjectsElements';
import ProjectCard from '../../../Components/Card/ProjectCard';
import DetailsModal from '../../../Components/ProjectDetails/DetailsModal';
const ProjectsSection = () => {
  return (
    <Projects id='projects'>
      <DetailsModal />
      <ProjectsGrid>
        <Img1 src={Gif1} />
        <Img2 src={Gif2} />
        {data.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </ProjectsGrid>
    </Projects>
  );
};

export default ProjectsSection;
