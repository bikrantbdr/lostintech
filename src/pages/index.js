import React ,{useState}from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Info from '../components/Info'
import Events from '../components/Events'
import { homeObjOne, homeObjTwo, homeObjThree} from '../components/Info/Data'
const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }
  
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
    <Hero/>
    <Info {...homeObjOne}/>
    <Info {...homeObjTwo}/>
    <Events/>
    <Info {...homeObjThree}/>
    </>
  )
}


export default Home