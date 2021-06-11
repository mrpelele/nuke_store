import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/NavBar/NavBar'
import {ItemLister} from './components/ItemList/ItemListContainer'


function App() {
  return (
    <div>
      
      <NavBar/>
      <ItemLister/>
      
    
    </div>
  );
}

export default App;
