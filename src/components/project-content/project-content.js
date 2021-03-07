import { Link } from 'react-router-dom';
import './project-content.css'
export const ProjectContent = ({ title, usedTechnology, summery, projectlink }) => {
    return <div className="project-content">
        <h3>{title}</h3>
        <h6>{usedTechnology}</h6>
        <p>{summery}</p>
        <Link to={projectlink}>Click for more</Link>
    </div>
}
