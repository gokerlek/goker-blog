import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
export const ProjectContent = ({
  title,
  usedTechnology,
  summary,
  projectlink,
  banner,
  children,
}) => {
  return (
    <div className="project-content">
      <h3>{title}</h3>
      <h6>{usedTechnology}</h6>
      <p>{summary}</p>
      <Link href={projectlink}>Click for more</Link>
      <style jsx>{`
        .project-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
          margin: 1.5em auto;
          padding: 1.5em 0.7em;
          width: 50%;
          border-radius: 1em;
          background-color: #f5f5f5;
          box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.32);
        }
        .project-content > h6,
        h3,
        p,
        a {
          margin: 0.1em 0;
          color: #292929;
        }
        .project-content :global(a) {
          text-decoration: none;
          color: #009fb7;
          font-size: 1em;
          font-weight: 800;
        }
      `}</style>
    </div>
  );
};
