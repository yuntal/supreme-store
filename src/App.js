import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Navigation} from "./components/Navbar";
import { SupremeShop } from "./components/pages/shop/Shop";
import { Cart } from "./components/pages/cart/Cart";
import Footer from "./components/Footer";
import './App.scss';
import { ShopContextProvider } from "./context/Shop-context";

function App() {
  return (
    <div className="App">
      <ShopContextProvider> 
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<SupremeShop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer/>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
