import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Curiosity from './Curiosity';
import Opportunity from './Opportunity';
import Spirit from './Spirit';

function App() {
  return (
    <Router>
      <div className="App" style={{backgroundColor: 'black'}}>
        <Navbar />

        <div className="content" >
        <Switch>
          <Route exact path="/"> 
            <Home />
          </Route>
          <Route exact path="/curiosity"> 
            <Curiosity />
          </Route>
          <Route exact path="/opportunity"> 
            <Opportunity />
          </Route>
          <Route exact path="/spirit"> 
            <Spirit />
          </Route>
        </Switch>
        </div>

      </div>
    </Router>
  );
}

export default App;
