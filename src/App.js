import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/NavBar/NavBar'
import {ItemLister} from './components/ItemList/ItemListContainer'
import {DetailLister} from './components/ItemListDetail/ItemDetailContainer'
import {BrowserRouter,Switch,Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>

      <NavBar/>

        <Switch>

          <Route exact path="/">
            <ItemLister/>
          </Route>

          <Route path="/ranges/:range">
            <ItemLister/>
          </Route>

          <Route path="/item/:id">
            <DetailLister/>
          </Route>  

        </Switch>

    </BrowserRouter>
  );
}

export default App;


