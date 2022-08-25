import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm Travis Engh
      </SectionTitle>
      <SectionText>
      Information Security Analyst during the day<br />
      Full Stack Web Developer (in training) at night
      </SectionText>
    <Button onClick={() => window.location = '/#tech'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;