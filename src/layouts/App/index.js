import React from 'react';
import { Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';
import Icon from 'react-fa';
import Home from '../../pages/Home';
import Music from '../../pages/Music';
import Projects from '../../pages/Projects';
import Adventure from '../../pages/Adventure';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import PageNotFound from '../../pages/PageNotFound';
import logo from './images/kb_logo_f32f04_transparent_small.png';
import './style.css';
import './Nunito.css';

const browserHistory = createBrowserHistory();
ReactGA.initialize('UA-93766203-1', {debug: true});

const historyListener = (location, action) => {
  ReactGA.set({ page: location.pathname + location.search });
  ReactGA.pageview(location.pathname + location.search);
}
browserHistory.listen(historyListener);
historyListener(window.location);

class App extends React.Component {
  render() {
    return (
      <Router history={ browserHistory }>
        <div className="App">
          <div className="App-header">
            <Link to="/">
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
            <div className="App-title-right">Karthik Ravichandran</div>
          </div>
          <div className="App-nav">
            <NavLink exact to="/" className="App-nav-link" activeClassName="App-nav-link-active">
              <Icon name="home"/>
            </NavLink>
            <NavLink exact to="/projects" className="App-nav-link" activeClassName="App-nav-link-active">
              <Icon name="code"/>
            </NavLink>
            <NavLink exact to="/music" className="App-nav-link" activeClassName="App-nav-link-active">
              <Icon name="music"/>
            </NavLink>
            <NavLink exact to="/adventure" className="App-nav-link" activeClassName="App-nav-link-active">
              <Icon name="map"/>
            </NavLink>
            <NavLink exact to="/about" className="App-nav-link" activeClassName="App-nav-link-active">
              <Icon name="info-circle"/>
            </NavLink>
            <NavLink exact to="/contact" className="App-nav-link" activeClassName="App-nav-link-active">
              <Icon name="external-link"/>
            </NavLink>
          </div>
          <div className="App-content">
            <Switch>
              <Route exact path="/" render={props => <Home />}/>
              <Route exact path="/projects" render={props => <Projects />}/>
              <Route exact path="/music" render={props => <Music />}/>
              <Route exact path="/adventure" render={props => <Adventure />}/>
              <Route exact path="/about" render={props => <About />}/>
              <Route exact path="/contact" render={props => <Contact />}/>
              <Route path="*" render={props => <PageNotFound />}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
