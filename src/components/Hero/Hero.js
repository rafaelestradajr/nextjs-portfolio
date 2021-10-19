import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
       Rafael Estrada <br/>
       Full Stack Developer
     </SectionTitle>
     <SectionText>
       Dedicated to learning, growing and succeeding in computers software.  I 
       offer my best professional ability to become part of team.
     </SectionText>
     <Button onClick={()=> window.location='https://google.com'}>Learn More</Button>

   </LeftSection>
 </Section>
);

export default Hero;