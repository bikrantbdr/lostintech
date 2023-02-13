import React ,{useState}from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Info from '../components/Info'
import Events from '../components/Events'
import { homeObjOne, homeObjTwo} from '../components/Info/Data'
import Timeline from '../components/Timeline'
import Sponsor from '../components/Sponsor'
import Footer from '../components/Footer'
import WhySponsorUs from '../components/WhySponsorUs'
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
    <Timeline/>
    <Sponsor/>
    <WhySponsorUs/>
    <Footer/>
    </>
  )
}


export default Home