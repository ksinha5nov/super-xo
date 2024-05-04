import { Outlet } from 'react-router'
import NavBar from './components/NavBar'
import LandingPage from './components/landingPage'
import SuperBoard from './components/superBoard'

function App() {

  return (
    <>
      <div className='flex flex-col items-center'>
        <NavBar />
        <Outlet />
        {/*<SuperBoard />*/}
      </div>
    </>
  )
}

export default App

