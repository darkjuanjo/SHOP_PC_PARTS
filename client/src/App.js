import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Cart from './components/Cart/Cart';
import data from './Data/data';
import { useState } from 'react';
import About from './components/About/index';
import Profile from './components/Profile';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { setContext } from '@apollo/client/link/context';
import Items from './components/Items';
import AddInventory from './components/AddInventory';
// import StripeContainer from './components/StripeContainer/StripeContainer';


function App() {

  const httpLink = createHttpLink({
    uri: '/graphql',
  });
  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  // const [showItem, setShowItem] = useState(false)
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (category) => {
    const cartItem = cartItems.find(item => item._id === category._id);
    if (cartItem) {
      setCartItems(
        cartItems.map(item =>
          item._id === category._id ? { ...cartItem, qty: cartItem.qty + 1 } : item
        )
      );
    }
    else {
      setCartItems([...cartItems, { ...category, qty: 1 }]);
    }
  };

  const onRemove = (category) => {
    const cartItem = cartItems.find((item) => item._id === category._id);
    if (cartItem.qty === 1) {
      setCartItems(cartItems.filter((item) => item._id !== category._id));
    } else {
      setCartItems(
        cartItems.map(item =>
          item._id === category._id ? { ...cartItem, qty: cartItem.qty - 1 } : item
        )
      );

    }
  }

  function totalItems() {
    var total = 0;
    cartItems.forEach(item => {
      total += item.qty;
    });
    return total;
  }

  return (
    <ApolloProvider client={client}>
      <Router>
        <Header countCartItems={totalItems(cartItems)}></Header>
        <div className="App">
          <Switch>
            <Route exact path="/" render={() =>
              <>
                <div className="App">
                  <About></About>
                  <div className="row">
                    <Main onAdd={onAdd}></Main>
                  </div>
                </div>
              </>
            }
            />
            <Route exact path="/Cart" render={() =>
              <>
                <div className="App">
                  <main>
                    <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Cart>
                  </main>
                </div>
              </>
            }
            />
            <Route exact path="/Profile/:username?" render={() =>
              <>
                <div className="App">
                  <Profile></Profile>
                </div>
              </>
            }
            />
            <Route exact path="/Items" render={() =>
              <>
                <div className="App">
                  <Items onAdd={onAdd} />
                </div>
              </>
            }
            />
            <Route exact path="/AddInventory" render={() =>
              <>
                <div className="App">
                  <AddInventory />
                </div>
              </>
            }
            />
          </Switch>
          {/* {showItem ? <StripeContainer /> : <button onClick={() => setShowItem(true)}>Purchase</button>} */}
        </div>
      </Router>
    </ApolloProvider>
  );
}
export default App;
