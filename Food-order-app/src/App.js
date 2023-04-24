import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from './components/Meals/Meals'
import CartProvider from "./store/CartProvider";

function App() { 

  const [CartIsShown, setCartIsShown] = useState(false)

  function showCartHandler() {
    setCartIsShown(true)
  }

  function hideCartHandler() {
    setCartIsShown(false)
  }

  return (
    <CartProvider>
      {CartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} onHideCart={hideCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
