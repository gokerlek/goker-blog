export const Day1 = () => {
    return <div className="day1">
        <p>
            I have installed NVM by running the following command on the terminal <br></br>

                wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash

                When the installation was finished, I listed the files by entering the command below.

                ls -al ~/

                I executed the bashrc file from the incoming list with the following command.

                cat ~/.bashrc

                I downloaded the NodeJs latest version by entering the command below.

                nvm install v15.8.0

                I entered the following commands to check

                npm -v

                node-v

                To create a Goker Blog project file, it is necessary to enter the projects file. I created my file in the projects folder by entering the commands below.
                cd projects

                npx create-react-app goker-blog

                To install the default react app in the goker blog file, go to the following command

                cd goker-blog

                npm start

                When the process is over, localhost: 3000 opens in the browser. The default react app works locally.

                Open a new terminal and enter the following commands.

                cd projects

                code goker-blog

                Thus, the app I created in VS opens.

                After that I opened a new repostroy on GitHub and mapped it to VS.

                Then I signed in to vercel.com with my github account.

                Then I uploaded my goker-blog project on github.

                Now the changes I made in my project can be viewed online.
        </p>
    </div>;
}