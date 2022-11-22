import {BrowserRouter as Router, Routes, Route} from  'react-router-dom'
import Home from './pages';
import './app.css'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} exact />
        {/* <Route path='/signin' component={SigninPage} exact /> */}
      </Routes>
    </Router>
    </>
  );
} 

export default App;
