import Contact from "./components/contact/Contact"
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
    </>
  )
}

export default App
