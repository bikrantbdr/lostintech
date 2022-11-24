import {BrowserRouter as Router, Routes, Route} from  'react-router-dom'
import Home from './pages';
import './app.css'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/lostintech' element={<Home/>} > </Route>
        <Route path='*' element={<Home/>} > </Route>
      </Routes>
    </Router>
    </>
  );
} 

export default App;
