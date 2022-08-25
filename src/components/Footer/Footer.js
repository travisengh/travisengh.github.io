import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
        <LinkTitle>Resume</LinkTitle>
        <LinkItem target="_blank" href="TESecAnalystResume.pdf">Resume Download</LinkItem>
        </LinkColumn>
        <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto: engh.travis@outlook.com">engh.travis@outlook.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Design, Develop, Repeat</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons target="_blank" href="https://www.linkedin.com/in/travisengh/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons target="_blank" href="https://github.com/travisengh">
            <AiFillGithub size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
