import Link from 'next/link';
import { Code } from '../components/code';
import { Container } from '../components/container';
import { Layout } from '../components/layout';
import { PageHeader } from '../components/page-header';

const Day1 = () => {
  return (
    <Layout title="Göker Blog - React: Very First Steps">
      <Container>
        <div className="day1">
          <PageHeader>React: Very First Steps</PageHeader>
          <p>
            I have installed NVM by running the following command on the terminal
          </p>
          <Code language="bash">
            {`wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash`}
          </Code>
          <p>
            When the installation was finished, I listed the files by entering the
            command below.
          </p>
          <Code language="bash">{`ls -al ~/`}</Code>
          <p>
            I executed the bashrc file from the incoming list with the following
            command.
          </p>
          <Code language="bash">{`cat ~/.bashrc`}</Code>
          <p>
            I downloaded the NodeJs latest version by entering the command below.
          </p>
          <Code language="bash">{`nvm install v15.8.0`}</Code>
          <p>I entered the following commands to check</p>
          <Code language="bash">{`npm -v`}</Code>
          <Code language="bash">{`node-v`}</Code>
          <p>
            To create a Goker Blog project file, it is necessary to enter the
            projects file. I created my file in the projects folder by entering the
            commands below.
          </p>
          <Code language="bash">{`cd projects`}</Code>
          <Code language="bash">{`npx create-react-app goker-blog`}</Code>
          <p>
            To install the default react app in the goker blog file, go to the
            following command
          </p>
          <Code language="bash">{`cd goker-blog`}</Code>
          <Code language="bash">{`npm start`}</Code>
          <p>
            When the process is over, localhost: 3000 opens in the browser. The
            default react app works locally.
          </p>
          <p>Open a new terminal and enter the following commands.</p>
          <Code language="bash">{`cd projects`}</Code>
          <Code language="bash">{`code goker-blog`}</Code>
          <p>Thes, the app I created in VS opens.</p>
          <p>After that I opened a new repostroy on GitHub and mapped it to VS.</p>
          <p>Then I signed in to vercel.com with my github account.</p>
          <p>Then I uploaded my goker-blog project on github.</p>
          <p>Now the changes I made in my project can be viewed online.</p>
          <Link href="/day2">Click to see Day 2</Link>
        </div>
      </Container>
    </Layout>
  );
};

export default Day1;
