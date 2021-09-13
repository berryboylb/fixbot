import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import "./css/style.css";
function App() {
  return (
    <>
   <Router>
        <div className="App">
          <Navbar/>
            <Switch>
              <Route exact path = "/">
                <Home/>
              </Route>
              <Route path = '/services'>
                services
              </Route>
              <Route path = '/about'>
                about
              </Route>
              <Route path = '/blog'>
                  blog
              </Route>
              <Route path = '/contact us'>
                contact us
              </Route>
              <Route path = '/request access'>
                request access
              </Route>
            </Switch>
        </div>
    </Router>
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            login
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
