import React from 'react'
import { TitleSponsor } from './Data'
import { SponsorContainer,Heading1,TierHeading } from './SponsorElements'
import SponsorTier from './SponsorTier'
const Sponsor = () => {
  return (
    <>
    <SponsorContainer id='sponsor'>
        <Heading1>Sponsors & Partners</Heading1>

        <TierHeading>Title sponsor</TierHeading>
        <SponsorTier tiers={TitleSponsor}/>

        <TierHeading>Gold sponsor</TierHeading>
        <SponsorTier tiers={TitleSponsor}/>


    </SponsorContainer>



    </>
  )
}

export default Sponsor