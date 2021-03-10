import { Link } from 'react-router-dom';
export const ProjectContent = ({ title, usedTechnology, summery, projectlink }) => {
    return <div className="project-content">
        <h3>{title}</h3>
        <h6>{usedTechnology}</h6>
        <p>{summery}</p>
        <Link to={projectlink}>Click for more</Link>
        <style>{`
            .project-content{
                display:flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-evenly;
                margin: 1.5em auto;
                padding: 1.5em 0;
                width: 50%;
                border-radius: 1em;
                background-color: #f5f5f5;
                box-shadow: 5px 5px 20px 0px rgba(0,0,0,0.32);
            }
            .project-content > h6,h3,p,a {
                margin:  0.1em 0;
                color: #292929;
            }
            .project-content a {
                text-decoration: none;
                color: #009FB7;
                font-size: 1em;
                font-weight: 800;
            }
        `}</style>
    </div>
}
