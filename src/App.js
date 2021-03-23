import "./App.css";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ContentContainer from "./components/ContentContainer";
import ProductCard from "./components/ProductCard";
import scifi from "./json/scifi";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <ContentContainer>
        {scifi.map((item) => {
          <ProductCard key={item.asin} name={item.title} img={item.img} price={item.price} />;
        })}
      </ContentContainer>
      <Footer />
    </div>
  );
}

export default App;
