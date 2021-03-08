import { PageHeader } from '../components/page-header/page-header'
import { useState } from 'react'
import { ProjectContent } from '../components/project-content/project-content'
import { projectsDatas } from '../components/projects-datas'
export const ProjectsPage = () => {
    const [datas, setDatas] = useState([{ projectsDatas }])
    return <div>
        <PageHeader> My projects </PageHeader>
        {datas.map(data => (
            <ProjectContent
                title={data.title}
                usedTechnology={data.usedTechnology}
                summery={data.summery}
                projectlink={data.projectlink}>
            </ProjectContent>
        ))}
    </div>
}