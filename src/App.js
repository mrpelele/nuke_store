import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/NavBar/NavBar'
import {ItemLister} from './components/ItemList/ItemListContainer'
import {DetailLister} from './components/ItemListDetail/ItemDetailContainer'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import {CartProvider} from './components/Cart/CartContext'
import {CartDisplay} from './components/Cart/Cart'



function App() {
  return (
    <CartProvider>
      <BrowserRouter>

        <NavBar/>

          <Switch>

            <Route exact path="/">
              <ItemLister/>
            </Route>

            <Route path="/range/:ranges">
              <ItemLister/>
            </Route>

            <Route path="/item/:id">
              <DetailLister/>
            </Route>

            <Route path="/cart">
              <CartDisplay/>
            </Route>

          </Switch>


      </BrowserRouter>
    </CartProvider>
  );
}

export default App;


