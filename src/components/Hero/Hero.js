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
      Manager of Software Engineering
      </SectionText>
    <Button onClick={() => window.location = '/#tech'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;