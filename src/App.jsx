import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Component/Footer/Footer'
import Header from './Component/Header/Header'

function App() {

  return (
    <>
        <div className='lg:w-[80%] w-[90%] m-auto'>
            <Header></Header>
              <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </>
  )
}

export default App
