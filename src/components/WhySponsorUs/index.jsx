import React from 'react'
import { WhyContainer,WhyWrapper,WhyCard ,WhysH1,WhyIcon,WhyH2,WhyP} from './WhySponsorUsElements'
import promotion from '../../images/why/1.png'
import talent from '../../images/why/2.png'
import hiring from '../../images/why/3.png'
const WhySponsorUs = () => {
  return (
    <WhyContainer id='sponsor'>
        <WhysH1>Why sponsor us?</WhysH1>
        <WhyWrapper>
            <WhyCard>
                <WhyIcon src={promotion}></WhyIcon>
                <WhyH2>Promotion</WhyH2>
                <WhyP>Provides a platform to promote the sponsor's business through interacting directly with the students. A branding space will be provided to demonstrate the services provided by your brand.</WhyP>
            </WhyCard>
            <WhyCard>
                <WhyIcon src={talent}></WhyIcon>
                <WhyH2>Talent Pool</WhyH2>
                <WhyP>Students are delighted to be rewarded for their hard work. This is a great way to motivate students and market your brand.
</WhyP>
            </WhyCard>
            <WhyCard>
                <WhyIcon src={hiring}></WhyIcon>
                <WhyH2>Hiring Opportunities</WhyH2>
                <WhyP>Reach to the brilliant and emerging engineering minds ready to take on nerve-wracking challenges which can be an opportunity for hiring talents.</WhyP>
            </WhyCard>
        </WhyWrapper>

    </WhyContainer>
  )
}

export default WhySponsorUs