import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import { Footer } from './assets/components/Global/Footer';
import { Navbar } from './assets/components/Global/Navbar';
import { Aboutme } from './assets/components/Main/Aboutme';
import { Contact } from './assets/components/Main/Contact';
import { Main } from './assets/components/Main/Main';
import { Mywork } from './assets/components/Main/Mywork';
import { Album } from './assets/components/Album/Album'

function App() {
  return (
    <Router> 
      <div className="app">
        <Navbar/> 
          <Switch>
            <Route path="/" exact>            
                        <div className="scroll-container">
                            <Main/>
                            <Aboutme/>
                            <Mywork/>
                            <Contact/>                          
                        </div> 
            </Route>
            <Route path="/albums" exact>
              
              <Album/>
            
            </Route>
            <Redirect to="/"></Redirect>
          </Switch>
          
        </div>
          <Footer/>
    </Router>
  );
}

export default App;
