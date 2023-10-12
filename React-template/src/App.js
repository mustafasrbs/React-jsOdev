import Navbar from "./components/Navbar";
import Header from "./components/Header";
import PageContent from "./components/PageContent";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <PageContent />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;