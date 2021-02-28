import { Link } from 'react-router-dom';
import { Code } from '../components/code/code'
import { PageHeader } from '../components/pageHeader/pageHeader'
export const Day1 = () => {
    return <div className="day1">
        <PageHeader>LOGIN TO REACT</PageHeader>
        <p>I have installed NVM by running the following command on the terminal
        </p>
        <Code>wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
        </Code>
        <p>When the installation was finished, I listed the files by entering the command below.
        </p>
        <Code>ls -al ~/
        </Code>
        <p>I executed the bashrc file from the incoming list with the following command.
        </p>
        <Code>cat ~/.bashrc
        </Code>
        <p>I downloaded the NodeJs latest version by entering the command below.
        </p>
        <Code>nvm install v15.8.0
        </Code>
        <p>I entered the following commands to check
        </p>
        <Code>npm -v
        </Code>
        <Code>node-v
        </Code>
        <p>To create a Goker Blog project file, it is necessary to enter the projects file. I created my file in the projects folder by entering the commands below.
        </p>
        <Code>cd projects
        </Code>
        <Code>npx create-react-app goker-blog
        </Code>
        <p>To install the default react app in the goker blog file, go to the following command
        </p>
        <Code>cd goker-blog
        </Code>
        <Code>npm start
        </Code>
        <p> When the process is over, localhost: 3000 opens in the browser. The default react app works locally.
        </p>
        <p>Open a new terminal and enter the following commands.
        </p>
        <Code>cd projects
        </Code>
        <Code>code goker-blog
        </Code>
        <p>Thes, the app I created in VS opens.
        </p>
        <p>After that I opened a new repostroy on GitHub and mapped it to VS.
        </p>
        <p>Then I signed in to vercel.com with my github account.
        </p>
        <p>Then I uploaded my goker-blog project on github.
        </p>
        <p>Now the changes I made in my project can be viewed online.
        </p>
        <Link to="/day2">Click to see Day 2</Link>
    </div>;
}