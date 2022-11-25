import React from 'react'
import codinguniverse from '../../images/codinguniverse.svg'
import css from '../../images/css.svg'
import ai from '../../images/ai.svg'
import hardware from '../../images/hardware.svg'
import {EventsContainer, EventsH1, EventsWrapper, EventsCard, EventsIcon, EventsH2, EventsP} from './EventsElements'

const Events = () => {
  return (
    <EventsContainer id='events'>
      <EventsH1>Events</EventsH1>
      <EventsWrapper>
        <EventsCard to='/css'>
          <EventsIcon src={css}/>
          <EventsH2>CSS war</EventsH2>
          <EventsP>Battle against each other. Fast and neat wins!</EventsP>
        </EventsCard>
        <EventsCard to='/codinguniverse'>
        <EventsIcon src={codinguniverse}/>
          <EventsH2>Coding universe 2.0</EventsH2>
          <EventsP>Our annual competitive coding competition</EventsP>
        </EventsCard>
        <EventsCard to='/ai'>
          <EventsIcon src={ai}/>
          <EventsH2>AI</EventsH2>
          <EventsP>Unlock the mystery behind the machine</EventsP>
        </EventsCard>
        <EventsCard to='hardware'>
          <EventsIcon src={hardware}/>
          <EventsH2>Hardware exhibition</EventsH2>
          <EventsP>A lot of hit and trials</EventsP>
        </EventsCard>
      </EventsWrapper>
    </EventsContainer>
  )
}

export default Events
