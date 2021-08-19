import "./style.css";
import NavBarComp from "./components/NavbarComp.js";
import { Header } from "./components/Header.js";
import { CardComp } from "./components/CardComp.js";
import { Footer } from "./components/Footer.js";
import { useState, useEffect } from "react";
import { CartPanel } from "./components/CartPanel";

function App() {
  const [item, setItem] = useState([]);
  const [show, setShow] = useState("none");

  useEffect(() => {
    document.title = "Shop in Style";
  }, []);

  return (
    <div className="App">
      {/* Navigation Bar */}
      <NavBarComp setShow={setShow} item={item} />

      {/* Panel for cart */}
      <CartPanel setItem={setItem} show={show} setShow={setShow} item={item} />

      {/* Header of the Website */}
      <Header />

      {/* Card */}
      <CardComp setItem={setItem} item={item} />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

// Task –

// Rating according to value give

// Disable add to cart button when added to card

// Remove item from cart & enable add to cart
