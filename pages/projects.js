import { PageHeader } from '../components/page-header';
import { ProjectContent } from '../components/project-content';
import { Layout } from '../components/layout';
import { Container } from '../components/container';
import { getProjects } from '../api/projects';

const ProjectsPage = ({ page, menu, footer }) => {
  console.log(page);
  return (
    <Layout title="Göker Blog - My projects" footer={footer} menu={menu.menuItems}>
      <Container>
        <div>
          <PageHeader> My projects </PageHeader>
          {page.list.map((data) => (
            <ProjectContent
              key={data.id}
              title={data.content.title}
              usedTechnology={data.content.technologies}
              summery={data.content.summary}
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
