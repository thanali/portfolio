import Navigation from "./components/Navigation"
import Home from "./components/sections/Home"
import About from "./components/sections/About"
import Roadmap from "./components/sections/Roadmap"
import Showcase from "./components/sections/Showcase"
import Footer from "./components/sections/Footer"
import Skills from "./components/sections/Skills"

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Home />
        <About />
        <Skills />
        <Roadmap />
        <Showcase />
      </main>
      <Footer />
    </>
  )
}

export default App
