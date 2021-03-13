import { Code } from '../components/code';
import { Container } from '../components/container';
import { Layout } from '../components/layout';
import { PageHeader } from '../components/page-header';

const Day3 = () => {
  return (
    <Layout title="INTRODUCTION TO REACT ROUTER">
      <Container>
        <div className="day3">
          <PageHeader>INTRODUCTION TO REACT ROUTER</PageHeader>
          <p>
            We write the following command to the terminal so that we can use React
            router
          </p>
          <Code>npm install react-router-dom @ next</Code>
          <p>After the installation is finished, we start our project.</p>
          <Code>npm run start</Code>
          <p>We import the react router into the app.js file.</p>
          <Code>
            {`import {
          BrowserRouter as Router,
          Switch,
          Route,
          from "react-router-dom";`}
          </Code>
          <p>Now we can start setting up our router structure.</p>
          <p>
            We are writing the router to cover everything contained in return ().
          </p>
          <Code>
            {`import './App.css';
import {Header} from './components/header';
import {Container} from './components/container';
import {Footer} from './components/footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {ProjectsPage} from './pages/projects';
import {ContactPage} from './pages/contact';
import {HomePage} from './pages/home';
const App = () => {
  return (
    <Router>
    <div className = "layout">
    <Header />
    <Container>
    <ProjectsPage />
    <ContactPage />
    <HomePage />
    </Container>
    <Footer />
    </div>
    </Router>
    );
  }
  export default App;`}
          </Code>
          <p>
            Then we set up our "swicth" and "route" structure into the container. In
            this way, the web page will not be refreshed over and over again when
            switching between pages.
          </p>
          <Code>
            {`const App = () => {
          return (
            <Router>
            <div className = "layout">
            <Header />
            <Container>
            <Switch>
            <Route path = "/ projects">
            <ProjectsPage />
            </Route>
            <Route path = "/ contact">
            <ContactPage />
            </Route>
            <Route path = "/ day2">
            <Day2 />
            </Route>
            <Route path = "/ day3">
            <Day3 />
            </Route>
            <Route path = "/" exact>
            <HomePage />
            </Route>
            </Switch>
            </Container>
            <Footer />
            </div>
            </Router>
            );`}
          </Code>
          <p>
            We also included the Day1 and Day2 pages, as seen in the code block. The
            Day1 file will appear on the main page. For this reason, we will import
            it into home.js. We will link the Day2 file into the Day1 file. Below is
            the final version of the home.js and day1.js files.
          </p>
          <Code>
            {`import {Day1} from "./day1"
export const HomePage = () => {
  return <div>
  <Day1 />
  </div>
}
import {Link} from 'react-router-dom';
import {Code} from '../components/code/code'
export const Day1 = () => {
  return <div className = "day1">
  <p> 
  content
  </p>
  <Code> 
  some codes
  </Code>
  <Link to = "/ day2"> Click to see Day 2 </Link>
  </div>;
}`}
          </Code>
          <p>
            We see the Code in the Day1 file. We made a js file with Children
            structure just like container.js file. We also created the code.css file.
            T his way, wherever we do the code structure, it will appear as code.css.
            I n addition, we need to use the Link structure to run a link with the
            react router. Let's replace the "a href" structure in the header and
            footer with the "link" structure. Below is the final version of
            header.js.
          </p>
          <Code>
            {`import {Link} from "react-router-dom";
export const Header = () => {
  return 
  <div className = "header">
  <Link to = "/"> Home </Link>
  <Link to = "/ projects"> Projects </Link>
  <Link to = "/ contact"> Contact </Link>
  </div>
}`}
          </Code>
          <p>Now, our site has become faster to switch between pages.</p>
        </div>
      </Container>
    </Layout>
  );
};

export default Day3;
