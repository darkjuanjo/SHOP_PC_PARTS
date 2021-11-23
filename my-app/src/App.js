
import Header from './components/Header/Header';
import Main from './components/Main/Main';

import Cart from './components/Cart/Cart';
import data from './components/Data/data';
import Category from './components/Category/Category';
// import About from './components/About';



function App() {
  const { categories } = data;
  return (
    <div className="App">
      <Header></Header>
      <div className="row">
        <Main categories={categories}></Main>
        <Cart></Cart>
        
      </div>
     <Category></Category>
    </div>
  );
}

export default App;
