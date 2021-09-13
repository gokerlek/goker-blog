import { ProjectContent } from '../components/project-content';
import { Layout } from '../components/layout';
import { Container } from '../components/container';
import { getProjects } from '../api/projects';

const ProjectsPage = ({ page, menu, footer }) => {
  return (
    <>
      <Layout title="Göker Blog - My projects" footer={footer} menu={menu.menuItems}>
        <Container width="960px">
          <ul className="flex-container">
            {page.list.map((data) => (
              <li className="flex-item">
                <ProjectContent key={data.id} projects={data.content} />
              </li>
            ))}
          </ul>
        </Container>
      </Layout>
      <style jsx>
        {`
          .flex-container {
            display: flex;
            flex-flow: row wrap;
            justify-content: flex-start;
            padding: 0;
            margin: 0 auto;
            list-style: none;
          }
          .flex-item {
            max-width: 400px;
            margin: 1em;
          }

          @media screen and (max-width: 950px) {
            .flex-container {
              justify-content: center;
              width: 460px;
            }
            .flex-item {
              max-width: 400px;
              margin: 0.5em;
            }
          }
        `}
      </style>
    </>
  );
};

export const getStaticProps = async () => {
  const props = await getProjects();
  return { props };
};

export default ProjectsPage;
