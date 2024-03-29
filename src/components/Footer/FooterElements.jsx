import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
  background-color: #001E2F;
  min-height: 600px;
`

export const FooterWrap = styled.div`
  padding: 48px 0px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`
export const FooterLinkContainer = styled.div`
  display: flex;
  width: 50vw;
  justify-content: space-between;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`
export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 15px;
    width: 100%;
  }
`
export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`
export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #59B3EF;
    transition: 0.3s ease-in-out;
  }
`
export const SocialMediaLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #59B3EF;
    transition: 0.3s ease-in-out;
  }
`
export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`

export const Logoimg = styled.img`
  width:50px;
  height: 50px;
`
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
`
export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`
export const Copyright =styled.div`
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  color:#fff;
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  gap:5px;
`