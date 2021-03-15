import { PageHeader } from '../components/page-header';
import { useState } from 'react';
import { ProjectContent } from '../components/project-content';
import { projectsDatas } from '../components/projects-datas';
import { Layout } from '../components/layout';
import { Container } from '../components/container';
import { getProjects } from '../api/projects';

const ProjectsPage = (props, menu, footer) => {
  console.log(props);
  const [datas] = useState(projectsDatas);

  return (
    <Layout title="Göker Blog - My projects" footer={footer} menu={menu.menuItems}>
      <Container>
        <div>
          <PageHeader> My projects </PageHeader>
          {datas.map((data) => (
            <ProjectContent
              key={data.id}
              title={data.title}
              usedTechnology={data.usedTechnology}
              summery={data.summery}
              projectlink={data.projectlink}
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
