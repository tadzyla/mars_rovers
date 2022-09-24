import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Curiosity from './Curiosity';
import Opportunity from './Opportunity';
import Spirit from './Spirit';
import Perseverance from './Perseverance';


function App() {     // Switch component show only one router at the time
  return (
    <Router>
      <div className="app">
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
          <Route exact path="/perseverance"> 
            <Perseverance />
          </Route>
        </Switch>
        </div>

      </div>
    </Router>
  );
}

export default App;
