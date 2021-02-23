import './App.css';
import { Wrapper } from './components/wrapper.js'
import { Header } from './components/header.js';
import { Container } from './components/container.js';
import { Day1 } from './pages/day1.js';
import { Footer } from './components/footer.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ProjectsPage } from './pages/projects';
import { ContactPage } from './pages/contact';
import { HomePage } from './pages/home';
import { Day2 } from './pages/day2';

const App = () => {
  return (
    <Router>
      <div className="layout">
        <Wrapper>
          <Header />
          <Container>
            <Switch>
              <Route path="/projects">
                <ProjectsPage />
              </Route>
              <Route path="/contact">
                <ContactPage />
              </Route>
              <Route path="/day2">
                <Day2 />
              </Route>
              <Route path="/" exact>
                <HomePage />
              </Route>
            </Switch>
          </Container>
          <Footer />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
