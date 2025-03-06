import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Introduction from "./components/intro/Introduction"
import Navbar from "./components/navbar/Navbar"
import Projects from "./components/projects/Projects"

import "./styles/global.scss"

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Introduction />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
