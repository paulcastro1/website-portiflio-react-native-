import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const projectsDemo = [{
  title: 'project 1',
  description: 'This is a very long project.'
},{
  title: 'project 2',
  description: 'This is a very long project.'
},{
  title: 'project 3',
  description: 'This is a very long project.'
},{
  title: 'project 4',
  description: 'This is a very long project.'
}]


const Projects = () => (
  <section nopadding id="projects">
<SectionDivider />
<SectionTitle main>Projects</SectionTitle>
<GridContainer>
  {[].map((projects)=>
  <div>
    {projects}
  </div>
  )}
</GridContainer>
  </section>
);

export default Projects;