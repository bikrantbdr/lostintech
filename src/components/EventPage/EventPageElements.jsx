import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  min-height: 100vh;
  background:#001E2F;
  color:#fff;
  font-family: 'Nunito', sans-serif;
`

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`

export const EventWrapper = styled.div`
    display:flex;
    justify-content: space-around;
    margin-top: 3rem;

    @media screen and (max-width: 980px) {
    flex-direction: column-reverse;
  }

`

export const TextCol=styled.div`
    width:65vw;
    display: flex;
    padding:0 4rem;
    flex-direction: column;

    @media screen and (max-width: 980px) {
        width:80vw;
  }

`

export const ImgCol=styled.div`
    margin:20px;
    width:30vw;
    min-height: 50vh;

    @media screen and (max-width: 980px) {
        width:80vw;
        margin:auto;
        padding-bottom: 30px;
  }
`
export const Images = styled.img`
    width:25vw;
    height:auto;
    padding-top: 3rem;
    margin: auto;

    @media screen and (max-width: 980px) {
        width:80vw;
  }
`

export const Heading1 = styled.div`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600px;
    color: #0b62a5;

    @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`
export const Heading2 = styled.div`
    margin-bottom: 12px;
    font-size: 24px;
    line-height: 1.1;
    font-weight: 400px;
    color: #59B3EF;
    text-transform: capitalize;

    @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

export const Text  = styled.div`
  max-width: 50vw;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color:#fff;

  @media screen and (max-width: 980px) {
        max-width:80vw;
  }
`

export const List = styled.ul`
    list-style: none;
`

export const ListItem = styled.li`
padding: 5px;
    
`
export const SecondColumn=styled.div`
  display: flex;
  flex-direction:column;
  padding:42px 0;
  background: #001E2F;
`
export const PrizeContainer=styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  gap:2rem;
  padding:0 0 36px 0;
`
export const PrizeCard=styled.div`
  width:400px;
  height:200px;
  background: #E6F2FF;
  color:#000;

  border-top: 3px solid #e5db1d;
  border-bottom: 3px solid #e5db1d;
  border-radius: 5px;

  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor:pointer;
  }
  &:nth-of-type(2),
  &:nth-of-type(5){
    border-top: 3px solid red;
  border-bottom: 3px solid red;
  }
  &:nth-of-type(3),
  &:nth-of-type(6){
    border-top: 3px solid green;
  border-bottom: 3px solid green;
  }
  
`
export const PrizeTitle = styled.div`
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 500;
  padding:0 0 10px 0;
`
export const PrizeMoney = styled.div`
  font-size: 1.1rem;
  padding:10px 0;
`

export const BtnWrap = styled.div`
  display:flex;
  justify-content: center;
  margin:2rem 0;
`;
