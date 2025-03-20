import Home from './pages/Home/Home'
import ImagenScroll from './layouts/ImagenScroll/ImagenScroll'
import Header from './layouts/Header/Header'
import Servicios from './pages/Servicios/Servicios'
function App() {
 

  return (
    <>
    <main className='bg-white' style={{height:'500dvh'}} >
      <Header/>
      <Home />
      <Servicios/>
      <ImagenScroll/>
    </main>
    

   
     </>
    
  )
}

export default App

