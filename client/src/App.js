import logo from './logo.svg';
import './App.css';
import Agent from './pages/agent';
import About from './pages/about';
import Search from './pages/search';
import Splash from './components/Splash';
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
        <Route exact path={`/`} component={About} />


        <Route path ={`/`} component={Contact} />

        <Route exact path ={`/agent`} component={Agent} />
        <Route exact path ={`/community`} component={Community} />
        <Route path={`/`} component={Footer}/>
      </Router>
    </div>
  );
}

export default App;
