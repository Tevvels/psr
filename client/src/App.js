import logo from './logo.svg';
import './App.css';
import Agent from './pages/agent';
import About from './pages/about';
import Search from './pages/search';
import Splash from './components/Splash';
import Spacer from './components/Spacer';
import Community from './pages/community';
import Nav from './components/Nav';
import Contact from './pages/contact';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Footer from './components/Footer';
function App() {
  return (

    <div className="App">
      <Router>
        <Nav />
        <Route path={`/`} component={Splash} />
        <Route id={`About`} exact path={`/`} component={About} />
        <Route path={`/`} component={Spacer} />


        <Route exact path = {`/`} component = {Contact} />

        <Route  exact path = {`/`} component = {Agent} />
        <Route path={`/`} component={Spacer} />

        <Route id={`Community`} exact path = {`/`} component = {Community} />

        <Route exact path = {`/`} component = {Footer}/>
      </Router>
    </div>
  );
}

export default App;
