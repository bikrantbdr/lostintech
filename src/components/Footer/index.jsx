import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinkItems, FooterLinkContainer,Logoimg, FooterLinkTitle, FooterLink,SocialMediaLink, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap,Copyright } from './FooterElements'
import { animateScroll as scroll } from 'react-scroll';
import favicon from '../../images/logo1.svg'

import { useState } from 'react';
import Message from './Message';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  const [username, setUsername] = useState('')
  const [useremail, setUseremail] = useState('')
  const [message, setMessage] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(useremail) 
    var atposition=useremail.indexOf("@");  
    var dotposition=useremail.lastIndexOf(".");  
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=useremail.length){  
      alert("Please enter a valid e-mail address");  
      return false;  
    }  
    setMessage(`Thankyou ${username} for your cooperation, we will send you updates on upcoming events🥳`)
    setUsername('')
    setUseremail('')
  }

  return (
    <FooterContainer id='contact'>
      <FooterWrap>
        {/* <FooterLinkContainer > */}
            {/* <FooterLinkItems>
              <FooterLinkTitle>Register</FooterLinkTitle>
                <FooterLink to='/hardware'>Hardware Hackathon</FooterLink>
                <FooterLink to='/css'>CSS battle</FooterLink>
                <FooterLink to='/codinguniverse'>Coding universe</FooterLink>
                <FooterLink to='/ai'>AI</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Get Updates</FooterLinkTitle>


                <SocialMediaLink href='https://www.instagram.com/ecastthapathali/' target='_blank'>Instagram</SocialMediaLink>
                <SocialMediaLink href='https://www.facebook.com/ecastthapathali' target='_blank'>Facebook</SocialMediaLink>
                <SocialMediaLink href='https://www.linkedin.com/company/ecastthapathali/' target='_blank'>Linkedin</SocialMediaLink>
            </FooterLinkItems> */}
            {/* <FooterLinkItems> */}
            {/* </FooterLinkItems> */}
        {/* </FooterLinkContainer> */}
        { message ? 
          <Message message={ message } /> : 
          
          <div className="form-container">
          <div className="heading1">Lost In Tech</div>
          <div className="description">Get updates for upcoming events</div>
          <form onSubmit={handleSubmit}>
            <div className='inputbox'>
              <input
                name='username'
                type='text'
                value={username}
                required={true}
                onChange={(event) => setUsername(event.target.value)}
              />
              <span>Name</span>
              <i></i>
            </div>
            <div className='inputbox'>
              <input
                name='useremail'
                type='text'
                value={useremail}
                required={true}
                onChange={(event) => setUseremail(event.target.value)}
              />
              <span>Email</span>
              <i></i>
            </div>
            <button type='submit' className='submit'>Notify me</button>
          </form>
        </div>
          }
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              <Logoimg src={favicon} alt="lit" />
            </SocialLogo>
            <SocialIcons>
              <SocialIconLink href='https://www.facebook.com/ecastthapathali' target='_blank' arial-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/ecastthapathali/' target='_blank' arial-label='Instagram'>
                <FaInstagram/>
              </SocialIconLink>
              <SocialIconLink href='https://www.linkedin.com/company/ecastthapathali/' target='_blank' arial-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
      <Copyright>
        <div>
      All Rights Reserved © ECAST
        </div>
        <div>
        Contact: 9860766566, 9865376629
        </div>
        <div>
        Email: ecast@tcioe.edu.np
        </div>
      </Copyright>
    </FooterContainer>
  )
}

export default Footer
