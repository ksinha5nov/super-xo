import NavBar from './components/NavBar';
import LandingPage from './components/landingPage';
import SingleBoard from './components/singleBoard';
import SuperBoard from './components/superBoard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <div className='flex flex-col items-center'>
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/super' element={<SuperBoard />} />
            <Route path='/regular' element={<SingleBoard />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App

