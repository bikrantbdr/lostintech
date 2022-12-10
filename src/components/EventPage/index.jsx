import React from 'react'
import { Container,Icon, EventWrapper, TextCol, ImgCol, Images, Heading1,Heading2, Text, List, ListItem, BtnWrap,PrizeContainer, PrizeCard,SecondColumn,PrizeTitle,PrizeMoney } from './EventPageElements'
import Footer from '../Footer/index'
import {Button} from '../ButtonElements.jsx'
const EventPage = ({id,heading,description,venue,date,rules,img,prizes}) => {
  return (
    <>
    <Container>
        <Icon to='/'>LIT</Icon>
        <EventWrapper id={id}>
            <TextCol>
                <Heading1>      {heading}          </Heading1>
                <Text>{description} </Text>

                <Heading2>        VENUE        </Heading2>
                <Text>   {venue}     </Text>

                <Heading2>   DATE</Heading2>

                <Text> {date}  </Text>

                <Heading2>    Rules </Heading2>
                <List>
                  {rules.map((rule) =>
                    <ListItem key={rules.indexOf(rule)}>
                      {rule}
                      </ListItem>
                  )}
                </List>

            </TextCol>
            <ImgCol>
                <Images src={img} alt="impact"/>
            </ImgCol>
        </EventWrapper>

        <SecondColumn>
          <PrizeContainer>
                  {
                    prizes.map((prize)=>
                    <PrizeCard key={prize.id}>
                      <PrizeTitle>{prize.title}</PrizeTitle>
                      <PrizeMoney>{prize.value?(<b>Prize: </b>):''}{prize.value}</PrizeMoney>
                      <PrizeMoney>Swags and other gifts</PrizeMoney>

                      </PrizeCard>
                    )
                  }
          </PrizeContainer>
          <BtnWrap>
              <Button to='dsc.gg/ecast'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                  primary={0}
                  dark={0}
                  dark2={0}
                  >Sign Up
              </Button>
          </BtnWrap>
        </SecondColumn>
    </Container>
    <Footer/>
    </>
  )
}

export default EventPage