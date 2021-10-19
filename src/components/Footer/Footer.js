import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>

     <LinkList>
     <LinkColumn>
     <LinkTitle>EMAIL</LinkTitle>
     <LinkItem href='mailto:contact@rafaelestrada@comcast.net'>RAFAELESTRADA@COMCAST.NET</LinkItem>
     
     </LinkColumn>


     </LinkList>
     <SocialContainer>
       <CompanyContainer>
         <Slogan>At your service</Slogan>
       </CompanyContainer>

       <SocialIconsContainer>
       <SocialIcons href='https://github.com'>

        <AiFillGithub size='3rem'/>
      </SocialIcons>
      <SocialIcons href='https://linkedin.com'>

        <AiFillLinkedin size='3rem'/>
      </SocialIcons>
      <SocialIcons href='https://instagram.com'>

        <AiFillInstagram size='3rem'/>
      </SocialIcons>
      </SocialIconsContainer>

     </SocialContainer>
   </FooterWrapper>
  );
};

export default Footer;
