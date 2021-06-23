
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'create-router-dom'
import { About } from './components/About'; //Importamos el componente
import { Users } from './components/Users';


function App() {
  return ( //Instanciamos nuestra clase
    <Router>
      <div>
        <Switch>
          <Route path="/about" component= {About} />    
          <Route path="/" component= {Users} />
        </Switch>
      </div> 
    </Router>
  );
}

export default App;
