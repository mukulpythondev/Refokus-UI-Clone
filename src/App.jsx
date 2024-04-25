
import './App.css'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marquees from './components/Marquees'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';



function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
   <div className='bg-zinc-900 text-white w-full h-full font-["satoshi_variable"] ' > 
               <Navbar/>
               <Work/>
               <Stripes/>
               <Products/>
               <Marquees/>
               <Cards/>
               <Footer/>
    </div>
    </>
  )
}

export default App
