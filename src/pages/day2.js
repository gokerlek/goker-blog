import { Link } from 'react-router-dom';
import { Code } from '../components/code';
import { PageHeader } from '../components/page-header';
export const Day2 = () => {
  return (
    <div className="day2">
      <PageHeader>CREATING THE BASIC BUILDING STONES OF A REACT WEBSITE</PageHeader>
      <p>
        We are starting to shape the project with React. First, I examined the files
        that came with the React installation. I cleared the App.css and App.js
        contents. I wrote the following codes to lay the foundations of the project
        in App.js
      </p>
      <Code>
        {`import './App.css';
const App = () => {
  return (
    <div className = "layout">
      <Header />
      <Container>
        <Day1 />
      </Container>
      <Footer />
    </div>
  );
}
export default App;`}
      </Code>
      <p>
        Although the view is similar to the HTML language, it is the js language
        called jsx. To understand that it is different from HTML language, we can
        note that the class was created by typing "className".
      </p>
      <p>
        The first letters of Header, Container, Day1 and Footer are capitalized. This
        indicates that they are a JS file. So we need to create a js file for four
        items. There is Day1 in the container. It must have a different structure
        than others. Below we see the structures.
      </p>
      <Code>
        {`export const Footer = () => {
return 
  <div className = "footer">
    <a href="home"> Home </a>
    <a href="projets"> Projects </a>
    <a href="contact"> Contact </a>
  </div>;
}`}
      </Code>
      <Code>
        {`export const Header = () => {
return 
  <div className = "header">
    <a href="home"> Home </a>
    <a href="projects"> Projects </a>
    <a href="contact"> Contact </a>
  </div>
}`}
      </Code>
      <Code>
        {`export const Container = ({children}) => {
return <div className = "container">
{children}
</div>
}`}
      </Code>
      <p>
        The structure of "children" has been added to the container function. In this
        way, Container content in App.js can be taken from another js file. We must
        export all js files. These js files need to be imported in App.js to work in
        App.js.
      </p>
      <Code>
        {`import './App.css';
import {Header} from '.header';
import {Container} from '.container';
import {Footer} from './footer';
const App = () => {
  return (
    <div className = "layout">
      <Header />
      <Container>
        <Day1 />
      </Container>
      <Footer />
    </div>
  );
}
export default App;`}
      </Code>
      <p>
        We create js files for home, projects, contact pages in Header and Footer.
      </p>
      <p>
        To avoid confusion, we put pages and components in separate files. We update
        the addresses of the files we have changed in the codes.
      </p>
      <p>We import the day1.js file so that Day1 appears in our home page.</p>
      <Code>
        {`import {Day1} from "./day1"
export const HomePage = () => {
return <div>
<Day1 />
</div>
}`}
      </Code>
      <p>
        We import the js files of the pages we want in App.js into App.js. We are now
        ready to quickly switch between our pages using react router.
      </p>
      <Link to="/day3">Click to see Day 3</Link>
    </div>
  );
};
