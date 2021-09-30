import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
<section row nopadding>
<LeftSection>
  <SectionTitle main center>
Hello there!   <br  />
Welcome to my Perssonal Portifolio
  </SectionTitle>
  <SectionText>
    I am a Paul Full stack developer 
  </SectionText>
  <button> onclick={()=> window.location = 'https://google.com'}Leran More</button>
</LeftSection>
</section>
);

export default Hero;