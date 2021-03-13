import { PageHeader } from '../components/page-header';
import { useState } from 'react';
import { ProjectContent } from '../components/project-content';
import { projectsDatas } from '../components/projects-datas';
export const ProjectsPage = () => {
  const [datas, setDatas] = useState(projectsDatas);
  return (
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
  );
};
