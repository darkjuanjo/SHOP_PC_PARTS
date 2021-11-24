import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Cart from './components/Cart/Cart';
import data from './Data/data';
import { useState } from 'react';
import About from './components/About/index';
import LoginForm from './components/Login';
import Nav from './components/Nav';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import StripeContainer from './components/StripeContainer/StripeContainer';

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});

function App() {
  // const adminUser = {
  //   email: "admin@mail.com",
  //   password: "admin123"
  // }


  // const [showItem, setShowItem] = useState(false)
  const { categories } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (category) => {
    const exist = cartItems.find(x => x.id === category.id);
    if (exist) {
      setCartItems(
        cartItems.map(x =>
          x.id === category.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...category, qty: 1 }]);
    }
  };
  const onRemove = (category) => {
    const exist = cartItems.find((x) => x.id === category.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== category.id));
    } else {
      setCartItems(
        cartItems.map(x =>
          x.id === category.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );

    }
  }
  return (
  <ApolloProvider client={client}>
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/LoginForm" render={() =>
            <>
              <div>
                <Nav></Nav>
                <main>
                  <LoginForm></LoginForm>
                </main>
              </div>
            </>
          }
          />
          <Route exact path="/" render={() =>
            <>
              <div className="App">
                <Header countCartItems={cartItems.length}></Header>
                <About></About>
                <div className="row">
                  <Main onAdd={onAdd} categories={categories}></Main>
                  <Cart onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Cart>
                </div>
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
