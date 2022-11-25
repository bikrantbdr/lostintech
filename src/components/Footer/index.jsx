import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinkItems, FooterLinkContainer, FooterLinkTitle, FooterLink,SocialMediaLink, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap } from './FooterElements'
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
            <FooterLinkItems>
              <FooterLinkTitle>Register</FooterLinkTitle>
                <FooterLink to='/hardware'>Hardware Hackathon</FooterLink>
                <FooterLink to='/css'>CSS battle</FooterLink>
                <FooterLink to='/codinguniverse'>Coding universe</FooterLink>
                <FooterLink to='/ai'>AI</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
                <SocialMediaLink href='https://www.instagram.com/ecast_thapathali/' target='_blank'>Instagram</SocialMediaLink>
                <SocialMediaLink href='https://www.facebook.com/ecastthapathali' target='_blank'>Facebook</SocialMediaLink>
                <SocialMediaLink href='https://www.linkedin.com/company/ecastthapathali/' target='_blank'>Linkedin</SocialMediaLink>
            </FooterLinkItems>
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              LIT
            </SocialLogo>
            <SocialIcons>
              <SocialIconLink href='https://www.facebook.com/ecastthapathali' target='_blank' arial-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/ecast_thapathali/' target='_blank' arial-label='Instagram'>
                <FaInstagram/>
              </SocialIconLink>
              <SocialIconLink href='https://www.linkedin.com/company/ecastthapathali/' target='_blank' arial-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
