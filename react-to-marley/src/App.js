import Aboutme from "./components/Aboutme";
import Contact from "./components/Contact";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Programs from "./components/Programs";
import Projects from "./components/Projects";


function App() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Aboutme />
      <Programs />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
