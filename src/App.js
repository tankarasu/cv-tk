import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from "react-router-dom";

// component import
import Home from "./container/Home";
import About from "./container/About";
import Contact from "./container/Contact";
import Projets from "./container/Projets";
import Technos from "./container/Technos";
import Formations from "./container/Formations";
import Postes from "./container/Postes";
import Langues from "./container/Langues";
import Loisirs from "./container/Loisirs";

function App() {
  return (
    <Router>
      <div>
        <h2>Welcome</h2>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li>
              <Link to={"/"} className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/contact"} className="nav-link">
                Contact
              </Link>
            </li>
            <li>
              <Link to={"/about"} className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link to={"/projets"} className="nav-link">
                Projets
              </Link>
            </li>
            <li>
              <Link to={"/technos"} className="nav-link">
                Technos
              </Link>
            </li>
            <li>
              <Link to={"/formations"} className="nav-link">
                Formations
              </Link>
            </li>
            <li>
              <Link to={"/postes"} className="nav-link">
                Postes
              </Link>
            </li>
            <li>
              <Link to={"/langues"} className="nav-link">
                Langues
              </Link>
            </li>
            <li>
              <Link to={"/loisirs"} className="nav-link">
                Loisirs
              </Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/projets" component={Projets} />
          <Route path="/technos" component={Technos} />
          <Route path="/formations" component={Formations} />
          <Route path="/postes" component={Postes} />
          <Route path="/langues" component={Langues} />
          <Route path="/loisirs" component={Loisirs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
