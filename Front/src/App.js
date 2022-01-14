import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import { Footer } from './assets/components/Global/Footer';
import { Navbar } from './assets/components/Global/Navbar';
import {Main} from './assets/components/Main/Main'
import { Album } from './assets/components/Album/Album'
import {Form} from './assets/components/Main/Contact/Form'

function App() {
  return (
    <Router> 
      <div className="app">
        <Navbar/> 
          <Switch>
            <Route path="/" exact>            
                <Main/>
            </Route>
            <Route path="/albums" exact>              
              <Album/>            
            </Route>
            <Route path="/contact" exact>
              <Form/>
            </Route>
            {/* <Redirect to="/"/> */}
          </Switch>
          
        </div>
      <Footer/>
    </Router>
  );
}

export default App;
