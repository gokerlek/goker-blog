import { FaStopwatch } from 'react-icons/fa';

export const PublishDate = ({ time }) => {
  return (
    <div className="publish-date">
      <p>{time}</p>
      <style jsx>{`
        .publish-date {
          color: #a5b1c2;
          font-size: 0.8em;
          display: flex;
          align-items: center;
        }
        .publish-date :global(p) {
          margin: 0.1em 0 0.5em;
        }
      `}</style>
    </div>
  );
};
