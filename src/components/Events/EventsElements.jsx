import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
export const EventsContainer = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 800px) {
    height: auto;
    padding:20px 0;
  }
 `
export const EventsWrapper = styled.div`
    max-width: 1250px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
  }

    @media screen and (max-width: 786px) {
      grid-template-columns: 1fr;
      padding: 0 20px;
  }
`
export const EventsCard = styled(LinkR)`
  text-decoration: none;
  color: #000;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  min-height: 320px;
  padding:  30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor:pointer;
  }
`
export const EventsIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;

`
export const EventsH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }  
`
export const EventsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`

export const EventsP = styled.p`
  font-size: 1rem;
  text-align: center;
`


