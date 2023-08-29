import './App.css'
import Banner from './components/Banner/Banner'
import Blog from './components/Blog/Blog'
import Company from './components/Company/Company'
import Country from './components/Country/Country'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Maps from './components/Maps/Maps'
// import Navbar from './components/Navbar/Navbar'
import Services from './components/Services/Services'

function App() {

  return (
    <>
    <Header></Header>
    {/* <Navbar></Navbar> */}
    <Banner></Banner>
    <Country></Country>
    <Services></Services>
    <Company></Company>
    <Blog></Blog>
    <Maps></Maps>
    <Footer></Footer>
  
    </>
  )
}

export default App
