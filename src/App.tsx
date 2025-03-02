import Footer from "./components/footer/Footer"
import Introduction from "./components/intro/Introduction"
import Navbar from "./components/navbar/Navbar"

import "./styles/global.scss"

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Introduction />
      </main>
      <Footer />
    </>
  )
}

export default App
