import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Regiao from './pages/regiao'
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/regiao/:nome" component={Regiao} />          
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
