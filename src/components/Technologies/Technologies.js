import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import { FcHighPriority } from 'react-icons/fc';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <br />
    <SectionTitle>Expertise</SectionTitle>
    <SectionText>
      I am an Information Security Analyst 2 with a primary focus on Data Loss Prevention (DLP) and Microsoft O365 Compliance in a healthcare setting
    </SectionText>
    <List>
      <ListItem>
          <FcHighPriority size="3rem" />
          <ListContainer>
            <ListTitle>Info Sec</ListTitle>
            <ListParagraph>
              Experience with<br />
              Exabeam, Force Point, Skyhigh, MS Purview,
              Carbon Black, Duo MFA, BeyondTrust, and
              Superna Eyeglass security software applications 
            </ListParagraph>
          </ListContainer>
        </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with<br />
            HTML, CSS, JavaScript, React.js, and Python
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with<br />
            Node.js and Django
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
