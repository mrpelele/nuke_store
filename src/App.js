import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/NavBar/NavBar'
import {ItemLister} from './components/ItemList/ItemListContainer'
import {DetailLister} from './components/ItemListDetail/ItemDetailContainer'


function App() {
  return (
    <div>
      
      <NavBar/>
      
      <ItemLister/>

      <DetailLister/>
      
    
    </div>
  );
}

export default App;


