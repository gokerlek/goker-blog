import './App.css';
import './code.css';
export const Day1 = () => {
    return <div className="day1">

        <div>
            <p> Code I have installed NVM by running the following command on the terminal
        </p>
            <p className="code">wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
        </p>
            <p>When the installation was finished, I listed the files by entering the command below.
        </p>
            <p className="code">ls -al ~/
        </p>
            <p>I executed the bashrc file from the incoming list with the following command.
        </p>
            <p className="code">cat ~/.bashrc
        </p>
            <p>I downloaded the NodeJs latest version by entering the command below.
        </p>
            <p className="code">nvm install v15.8.0
        </p>
            <p>I entered the following commands to check
        </p>
            <p className="code">npm -v
        </p>
            <p className="code">node-v
        </p>
            <p>To create a Goker Blog project file, it is necessary to enter the projects file. I created my file in the projects folder by entering the commands below.
        </p>
            <p className="code">cd projects
        </p>
            <p className="code">npx create-react-app goker-blog
        </p>
            <p>To install the default react app in the goker blog file, go to the following command
        </p>
            <p className="code">cd goker-blog
        </p>
            <p className="code"> npm start
        </p>
            <p> When the process is over, localhost: 3000 opens in the browser. The default react app works locally.
        </p>
            <p>Open a new terminal and enter the following commands.
        </p>
            <p className="code">cd projects
        </p>
            <p className="code">code goker-blog
        </p>
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
        </div>
    </div>;
}