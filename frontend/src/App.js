
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { About } from './components/About'; //Importamos el componente
import { Users } from './components/Users';
import { Navbar } from './components/Navbar';

function App() {
  return ( //Instanciamos nuestra clase
    <Router>
      <Navbar/>
      <div className="container p-4">
        <Switch>
          <Route path="/about" component= {About} />    
          <Route path="/" component= {Users} />
        </Switch>
      </div> 
    </Router>
  );
}

export default App;
