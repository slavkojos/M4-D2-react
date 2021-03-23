import "./App.css";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ContentContainer from "./components/ContentContainer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <ContentContainer />
      <Footer />
    </div>
  );
}

export default App;
