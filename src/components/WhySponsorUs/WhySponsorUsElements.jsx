import styled from 'styled-components'

export const WhyContainer = styled.div`
  min-height: 720px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #003049;
  padding:20px;
  font-family: 'Montserrat', sans-serif;

  @media screen and (max-width:1020px) {
    height: auto;
    padding:20px 0;
  }
 `

 export const WhyWrapper = styled.div`
    max-width: 1250px;
    margin: 0 auto;
    padding: 0 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap:1.25rem;
`

export const WhyCard = styled.div`
  text-decoration: none;
  color: #000;
  background: #D3E5F5;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  width:350px;
  min-height: 300px;
  /* width:350px;
  height: 370px; */
  padding:  30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor:pointer;
  }
`
export const WhysH1 = styled.h1`
  font-size: 2.5rem;
  color: #017eb7;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }  
`

export const WhyIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;

`

export const WhyH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`

export const WhyP = styled.p`
  font-size: 1rem;
  margin-top: 10px;
  text-align: center;
`