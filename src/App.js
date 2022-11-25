import {BrowserRouter as Router, Routes, Route} from  'react-router-dom'
import Home from './pages';
import CssPage from './pages/cssPage';
import AiPage from './pages/aiPage';
import HardwarePage from './pages/hardwarePage';
import CodingUniversePage from './pages/codingUniversePage';
import './app.css'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/lostintech' element={<Home/>} > </Route>
        <Route path='/' element={<Home/>} > </Route>

        <Route path='/css' element={<CssPage/>} > </Route>
        <Route path='/codinguniverse' element={<CodingUniversePage/>} > </Route>
        <Route path='/ai' element={<AiPage/>} > </Route>
        <Route path='/hardware' element={<HardwarePage/>} > </Route>
      </Routes>
    </Router>
    </>
  );
} 

export default App;
