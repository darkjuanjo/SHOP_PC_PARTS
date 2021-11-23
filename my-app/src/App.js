
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Cart from './components/Cart/Cart';
import data from './Data/data';
import { useState } from 'react';
// import About from './components/About';



function App() {
  const { categories } = data;
  const [cartItems, setCartItems] = useState( [] );
  const onAdd = (category) => {
    const exist = cartItems.find(x => x.id === category.id);
    if(exist) {
      setCartItems(
        cartItems.map(x =>
           x.id === category.id ? {...exist, qty: exist.qty + 1} : x
        )
      );
    } else {
      setCartItems([...cartItems, {...category, qty: 1 }]);
    }
  };
  return (
    <div className="App">
      <Header></Header>
      <div className="row">
        <Main onAdd={onAdd} categories={categories}></Main>
        <Cart onAdd={onAdd} cartItems={cartItems}></Cart>
        
      </div>
     {/* <About></About> */}
    </div>
  );
}

export default App;
