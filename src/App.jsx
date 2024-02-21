import './App.css'
import Navbar from './components/Navbar'
import Nft from './components/Nft' 
import Faq from './components/Faq'
import Roadmap from './components/Roadmap'
import Team from './components/Team'
import NewsLetter from './components/Newsletter'
import Footer from './components/Footer'
import Game from './components/Game'
function App() {

  return (
    <>
      <Navbar/>
      <Nft/> 
      <Faq/>
      <Roadmap/>
      <Team/>
      <NewsLetter/>
      <Footer/>
      <Game/>
    </>
  )
}

export default App
