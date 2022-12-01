import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import { FcBusinessman, FcHighPriority, FcRules } from 'react-icons/fc';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <br />
    <SectionTitle>Expertise</SectionTitle>
    <SectionText>
      I am the Manager of Engineering, Development, Integrations, and Database Administration in a healthcare setting.
      I have an extensive leadership background through 13 years of service in the Army National Guard, project/program
      management experience through work as a Business Continuity and Disaster Recovery Analsyt, and extensive technical
      expertise in the areas of Information Security and Web Development.
    </SectionText>
    <List>
      <ListItem>
        <FcBusinessman size="3rem" />
        <ListContainer>
          <ListTitle>Soft Skills</ListTitle>
          <ListParagraph>
            Experience with:<br />
            Personnel Management, Leadership, Agile/Kanban Methodology and Mindset, 
            Personal and Team Development, Team Building, Conflict Resolution, 
            Empathy, Project Management and Planning, Goal-oriented
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with:<br />
            HTML, CSS, JavaScript, React.js/Next.js, Redux, and Python
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with:<br />
            Node.js, Django, Django Rest Framework, Sanity, and PostgresSQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FcHighPriority size="3rem" />
        <ListContainer>
          <ListTitle>Info Sec Tech</ListTitle>
          <ListParagraph>
            Experience with:<br />
            Exabeam, Forcepoint, Proofpoint, Skyhigh, MS Purview,
            Carbon Black, Okta, Duo MFA, BeyondTrust, and
            Superna Eyeglass security software applications 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FcRules size="3rem" />
        <ListContainer>
          <ListTitle>Info Sec Practices</ListTitle>
          <ListParagraph>
            Experience with:<br />
            Business Continuity, Disaster Recovery, Incident Response, and
            Vendor Risk Management
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
