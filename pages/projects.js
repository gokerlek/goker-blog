import { ProjectContent } from '../components/project-content';
import { Layout } from '../components/layout';
import { Container } from '../components/container';
import { getProjects } from '../api/projects';
import { Label } from '../components/label';

const ProjectsPage = ({ page, menu, footer }) => {
  return (
    <Layout title="Göker Blog - My projects" footer={footer} menu={menu.menuItems}>
      <Container width="960px">
        <div>
          {page.list.map((data) => (
            <ProjectContent
              key={data.id}
              banner={data.content.thumbnail}
              title={data.content.title}
              usedTechnology={data.content.technologies.map((tech) => (
                <Label usedTechnologies={tech} />
              ))}
              summary={data.content.description}
              projectlink={data.content.projectLink}
            />
          ))}
        </div>
      </Container>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const props = await getProjects();
  return { props };
};

export default ProjectsPage;
