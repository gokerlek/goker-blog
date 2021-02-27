import { Link } from "react-router-dom"
import { Code } from '../components/code/code'

export const Day2 = () => {
    return <div className="day2">
        <p>
            We are starting to shape the project with React.
            First, I examined the files that came with the React installation.
            I cleared the App.css and App.js contents.
            I wrote the following codes to lay the foundations of the project in App.js
        </p>
        <Code>
            <p>{`import './App.css';`}</p>
            <p>{`const App = () => {`}</p>
            <p>{`return (`}</p>
            <p>{`<div className = "layout">`}</p>
            <p>{`<Header />`}</p>
            <p>{`<Container>`}</p>
            <p>{`<Day1 />`}</p>
            <p>{`</Container>`}</p>
            <p>{`<Footer />`}</p>
            <p>{`</div>`}</p>
            <p>{`);`}</p>
            <p>{`}`}</p>
            <p>{`export default App;`}</p>
        </Code>
        <p>
            Although the view is similar to the HTML language, it is the js language called jsx.
            To understand that it is different from HTML language, we can note that the class was created by typing "className".
        </p>
        <p>
            The first letters of Header, Container, Day1 and Footer are capitalized.
            This indicates that they are a JS file. So we need to create a js file for four items.
            There is Day1 in the container. It must have a different structure than others.
            Below we see the structures.
        </p>
        <Code>
            <p>{`export const Footer = () => {`}</p>
            <p>{`return <div className = "footer">`}</p>
            <p>{`<a href="home"> Home </a>`}</p>
            <p>{`<a href="projets"> Projects </a>`}</p>
            <p>{`<a href="contact"> Contact </a>`}</p>
            <p>{`</div>;`}</p>
            <p>{`}`}</p>
        </Code>
        <Code>
            <p>{`export const Header = () => {`}</p>
            <p>{`return <div className = "header">`}</p>
            <p>{`<a href="home"> Home </a>`}</p>
            <p>{`<a href="projects"> Projects </a>`}</p>
            <p>{`<a href="contact"> Contact </a>`}</p>
            <p>{`</div>`}</p>
            <p>{`}`}</p>
        </Code>
        <Code>
            <p>{`export const Container = ({children}) => {`}</p>
            <p>{`return <div className = "container">`}</p>
            <p>{`{children}`}</p>
            <p>{`</div>`}</p>
            <p>{`}`}</p>
        </Code>
        <p>
            The structure of "children" has been added to the container function.
            In this way, Container content in App.js can be taken from another js file.
            We must export all js files.
            These js files need to be imported in App.js to work in App.js.
        </p>
        <Code>
            <p>{`import './App.css';`}</p>
            <p>{`import {Header} from '.header';`}</p>
            <p>{`import {Container} from '.container';`}</p>
            <p>{`import {Footer} from './footer';`}</p>
            <p>{`const App = () => {`}</p>
            <p>{`return (`}</p>
            <p>{`<div className = "layout">`}</p>
            <p>{`<Header />`}</p>
            <p>{`<Container>`}</p>
            <p>{`<Day1 />`}</p>
            <p>{`</Container>`}</p>
            <p>{`<Footer />`}</p>
            <p>{`</div>`}</p>
            <p>{`);`}</p>
            <p>{`}`}</p>
            <p>{`export default App;`}</p>
        </Code>
        <p>
            We create js files for home, projects, contact pages in Header and Footer.
        </p>
        <p>
            To avoid confusion, we put pages and components in separate files.
            We update the addresses of the files we have changed in the codes.
        </p>
        <p>
            We import the day1.js file so that Day1 appears in our home page.
        </p>
        <Code>
            <p>{`import {Day1} from "./day1"`}</p>
            <p>{`export const HomePage = () => {`}</p>
            <p>{`return <div>`}</p>
            <p>{`<Day1 />`}</p>
            <p>{`</div>`}</p>
            <p>{`}`}</p>
        </Code>
        <p>
            We import the js files of the pages we want in App.js into App.js.
            We are now ready to quickly switch between our pages using react router.
        </p>
        <Link to="/day3">Click to see Day 3</Link>
    </div>;
}