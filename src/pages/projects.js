import { PageHeader } from '../components/page-header/page-header'
import { useState } from 'react'
import { ProjectContent } from '../components/project-content/project-content'
export const ProjectsPage = () => {
    const [datas, setDatas] = useState([
        {
            title: "Göker Blog",
            usedTechnology: "React, Css, HTML",
            summery: "My first project where I shared the steps I took while becoming a developer.",
            projectlink: "/day1",
        },
        {
            title: "Göker Blog",
            usedTechnology: "React, Css, HTML",
            summery: "summurryfvfv summurryfvfv summurryfvfv summurryfvfv summurryfvfv",
            projectlink: "/day1",
        },
        {
            title: "Göker Blog",
            usedTechnology: "React, Css, HTML",
            summery: "summurryfvfv summurryfvfv summurryfvfv summurryfvfv summurryfvfv",
            projectlink: "/day1",
        },
    ])
    return <div>
        <PageHeader>My projects</PageHeader>
        {datas.map(data => (
            <ProjectContent title={data.title} usedTechnology={data.usedTechnology} summery={data.summery} projectlink={data.projectlink}></ProjectContent>
        ))}

    </div>
}