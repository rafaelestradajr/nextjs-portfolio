import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>


<SectionText>
  I have worked with a range of technologies in the web development world.
  From front end to back end design.
</SectionText>
<List>
  <ListItem>
    <DiReact size='3rem'/>
    <ListContainer>
      <ListTitle>Front-End</ListTitle>
      <ListParagraph>
        Experience with React.js,  JavaScript,HTML,CSS
      </ListParagraph>
    </ListContainer>
  </ListItem>
  
  <ListItem>
    <DiFirebase size='3rem'/>
    <ListContainer>
      <ListTitle>Back-End</ListTitle>
      <ListParagraph>
        Experience with Node.js, SQL, MongoDB
      </ListParagraph>
    </ListContainer>
  </ListItem>

  <ListItem>
    <DiZend size='3rem'/>
    <ListContainer>
      <ListTitle>UI Design</ListTitle>
      <ListParagraph>
        Experience with Figma
      </ListParagraph>
    </ListContainer>
  </ListItem>
</List>

  </Section>
);

export default Technologies;
