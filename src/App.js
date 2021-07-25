import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/NavBar/NavBar'
import {ItemLister} from './components/ItemList/ItemListContainer'
import {DetailLister} from './components/ItemListDetail/ItemDetailContainer'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import {CartProvider} from './components/Cart/CartContext'
import {CartDisplay} from './components/Cart/Cart'
import {Footer} from './components/Footer/Footer'
import {ContactPage} from './components/Contact/contact'
import {CheckOrder} from './components/CheckOrder/CheckOrder'


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

            <Route path="/contact">
              <ContactPage/>
            </Route>

            <Route path="/check">
              <CheckOrder/>
            </Route>

          </Switch>

        <Footer/>

      </BrowserRouter>
    </CartProvider>
  );
}

export default App;


