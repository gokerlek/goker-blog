import './App.css';
import { Container } from './components/container/container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ProjectsPage } from './pages/projects';
import { ContactPage } from './pages/contact';
import { HomePage } from './pages/home';
import { Day2 } from './pages/day2';
import { Day3 } from './pages/day3';
import { Layout } from './components/layout/layout';


const App = () => {
  return (
    <Router>
      <Layout>
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
            <Route path="/day3">
              <Day3 />
            </Route>
            <Route path="/" exact>
              <HomePage />
            </Route>
          </Switch>
        </Container>
      </Layout>
    </Router>
  );
}

export default App;
