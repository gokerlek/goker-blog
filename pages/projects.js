import { ProjectContent } from '../components/project-content';
import { Layout } from '../components/layout';
import { Container } from '../components/container';
import { getProjects } from '../api/projects';
import { Label } from '../components/label';

const ProjectsPage = ({ page, menu, footer }) => {
  console.log(page);
  return (
    <Layout title="Göker Blog - My projects" footer={footer} menu={menu.menuItems}>
      <Container width="960px">
        {page.list.map((data) => (
          <ProjectContent
            key={data.id}
            projects={data.content}
            usedTechnology={data.content.technologies.map((tech) => (
              <Label usedTechnologies={tech} />
            ))}
          />
        ))}
      </Container>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const props = await getProjects();
  return { props };
};

export default ProjectsPage;
