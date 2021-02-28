import { Link } from 'react-router-dom';
import { Code } from '../components/code/code'
export const Day3 = () => {
    return <div className="day3">
        <p>
            We write the following command to the terminal so that we can use React router
            </p>
        <Code>
            npm install react-router-dom @ next
        </Code>
        <p>
            After the installation is finished, we start our project.
            </p>
        <Code>
            npm run start
        </Code>
        <p>
            We import the react router into the app.js file.
        </p>
        <Code>
            <p>{`import {`}</p>
            <p>{`BrowserRouter as Router,`}</p>
            <p>{`Switch,`}</p>
            <p>{`Route,`}</p>
            <p>{`} from "react-router-dom";`}</p>
        </Code>
        <p>
            Now we can start setting up our router structure.
        </p>
        <p>
            We are writing the router to cover everything contained in return ().
        </p>
        <Code>
            <p>{`import './App.css';`}</p>
            <p>{`import {Header} from './components/header';`}</p>
            <p>{`import {Container} from './components/container';`}</p>
            <p>{`import {Footer} from './components/footer';`}</p>
            <p>{`import {`}</p>
            <p>{`BrowserRouter as Router,`}</p>
            <p>{`Switch,`}</p>
            <p>{`Route,`}</p>
            <p>{`} from "react-router-dom";`}</p>
            <p>{`import {ProjectsPage} from './pages/projects';`}</p>
            <p>{`import {ContactPage} from './pages/contact';`}</p>
            <p>{`import {HomePage} from './pages/home';`}</p>
            <p>{`const App = () => {`}</p>
            <p>{`return (`}</p>
            <p>{`<Router>`}</p>
            <p>{`<div className = "layout">`}</p>
            <p>{`<Header />`}</p>
            <p>{`<Container>`}</p>
            <p>{`<ProjectsPage />`}</p>
            <p>{`<ContactPage />`}</p>
            <p>{`<HomePage />`}</p>
            <p>{`</Container>`}</p>
            <p>{`<Footer />`}</p>
            <p>{`</div>`}</p>
            <p>{`</Router>`}</p>
            <p>{`);`}</p>
            <p>{`}`}</p>
            <p>{`export default App;`}</p>
        </Code>
        <p>
            Then we set up our "swicth" and "route" structure into the container.
            In this way, the web page will not be refreshed over and over again when switching between pages.
        </p>
        <Code>
            <p>{`const App = () => {`}</p>
            <p>{`return (`}</p>
            <p>{`<Router>`}</p>
            <p>{`<div className = "layout">`}</p>
            <p>{`<Header />`}</p>
            <p>{`<Container>`}</p>
            <p>{`<Switch>`}</p>
            <p>{`<Route path = "/ projects">`}</p>
            <p>{`<ProjectsPage />`}</p>
            <p>{`</Route>`}</p>
            <p>{`<Route path = "/ contact">`}</p>
            <p>{`<ContactPage />`}</p>
            <p>{`</Route>`}</p>
            <p>{`<Route path = "/ day2">`}</p>
            <p>{`<Day2 />`}</p>
            <p>{`</Route>`}</p>
            <p>{`<Route path = "/ day3">`}</p>
            <p>{`<Day3 />`}</p>
            <p>{`</Route>`}</p>
            <p>{`<Route path = "/" exact>`}</p>
            <p>{`<HomePage />`}</p>
            <p>{`</Route>`}</p>
            <p>{`</Switch>`}</p>
            <p>{`</Container>`}</p>
            <p>{`<Footer />`}</p>
            <p>{`</div>`}</p>
            <p>{`</Router>`}</p>
            <p>{`);`}</p>
            <p>{`}`}</p>
        </Code>
        <p>
            We also included the Day1 and Day2 pages, as seen in the code block.
            The Day1 file will appear on the main page.
            For this reason, we will import it into home.js.
            We will link the Day2 file into the Day1 file.
            Below is the final version of the home.js and day1.js files.
        </p>
        <Code>
            <p>{`import {Day1} from "./day1"`}</p>
            <p>{`export const HomePage = () => {`}</p>
            <p>{`return <div>`}</p>
            <p>{`<Day1 />`}</p>
            <p>{`</div>`}</p>
            <p>{`}`}</p>
            <p>{`import {Link} from 'react-router-dom';`}</p>
            <p>{`import {Code} from '../components/code/code'`}</p>
            <p>{`export const Day1 = () => {`}</p>
            <p>{`return <div className = "day1">`}</p>
            <p>{`p> content`}</p>
            <p>{`</p>`}</p>
            <p>{`<Code> some codes`}</p>
            <p>{`</Code>`}</p>
            <p>{`<Link to = "/ day2"> Click to see Day 2 </Link>`}</p>
            <p>{`</div>;`}</p>
            <p>{`}`}</p>
        </Code>
        <p>
            We see the Code in the Day1 file.
            We made a js file with Children structure just like container.js file.
            We also created the code.css file. T
            his way, wherever we do the code structure, it will appear as code.css. I
            n addition, we need to use the Link structure to run a link with the react router.
            Let's replace the "a href" structure in the header and footer with the "link" structure.
            Below is the final version of header.js.
        </p>
        <Code>
            <p>{`import {Link} from "react-router-dom";`}</p>
            <p>{`export const Header = () => {`}</p>
            <p>{`return <div className = "header">`}</p>
            <p>{`<Link to = "/"> Home </Link>`}</p>
            <p>{`<Link to = "/ projects"> Projects </Link>`}</p>
            <p>{`<Link to = "/ contact"> Contact </Link>`}</p>
            <p>{`</div>`}</p>
            <p>{`}`}</p>
        </Code>
        <p>
            Now, our site has become faster to switch between pages.
        </p>
    </div >;
}