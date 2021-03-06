import { Switch,Route } from 'react-router-dom'
import './App.css';
import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'

  

function App() {

  return (
    <div className="App"> 
    <Switch>
      <Route exact path='/' component={Homepage}></Route>
      <Route path='/shop' component={ShopPage}></Route>
    </Switch>
    </div>
  );
}

export default App;
