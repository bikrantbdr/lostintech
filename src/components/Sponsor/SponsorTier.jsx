import React from 'react'
import styled from 'styled-components';
// import { Link } from 'react-router-dom';

const TierContainer=styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

`
const Sponsor=styled.a`
    margin:12px 24px;
`

const SponsorLogo=styled.img`
    max-width: 300px;
    padding:0 24px; 
    transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    cursor:pointer;
  }

    @media screen and (max-width: 768px) {
    max-width: 45vw;
    padding:24px 0;
  }

    @media screen and (max-width: 480px) {
    max-width: 55vw;
    padding:24px 0;
  }

`

const SponsorTier = ({tiers}) => {
  return (
    <TierContainer>
        {tiers.map((tier)=>
            <Sponsor key={tier.id} href={tier.link}>
            <SponsorLogo key={tier.id} src={tier.img}/>
            </Sponsor>
        )}
    </TierContainer>
  )
}

export default SponsorTier