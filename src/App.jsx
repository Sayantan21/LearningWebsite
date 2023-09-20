
import ResponsiveDrawer from './Components/Content/Test';
import Topics from './Components/Content/Topics';
import Footer from './Components/Footer/Footer'
// import Navbar from './Components/Navbar/Navbar'
import About_page from './Pages/About_page';
import Contact_page from './Pages/Contact_page';
import Course_page from './Pages/Course_page';
import Home_page from './Pages/Home_page'
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home_page />} />
        <Route path='/about' element={<About_page />} />
        <Route path='/topic' element={<Course_page />} />
        {/* <Route path='/topics' element={<Topics />} /> */}
        <Route path='/topics' element={<ResponsiveDrawer />} />
        <Route path='/contact' element={<Contact_page />} />
      </Routes>
      <Footer />
      {/* <ResponsiveDrawer/> */}
    </>
  )
}

export default App
