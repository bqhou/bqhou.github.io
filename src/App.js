import Contact from "./components/Contact/Contact";
import NavBar from "./components/NavBar/NavBar";
import Skills from "./components/Skills/Skills";
import Footer from "./components/footer/Footer";
import Intro from "./components/intro/Intro";
import Works from "./components/works/Works";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Intro></Intro>
      <Skills></Skills>
      <Works></Works>
      <Contact></Contact>
     <Footer></Footer>
    </div>
  );
}

export default App;
