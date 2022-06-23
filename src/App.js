import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import Create from './Create';
import Success from './Success';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            {/* <Route path="/create">
              <Create />
            </Route> */}
            <Route path="/success">
              <Success />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
