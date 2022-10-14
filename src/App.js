import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Signup from './Sign';
import Search from './Search';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/about" component={About} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
