import { FaStopwatch } from 'react-icons/fa';

export const ReadingMinutes = ({ text }) => {
  return (
    <div className="reading-minutes">
      <p>
        {<FaStopwatch />} {text}
      </p>
      <style jsx>{`
        .reading-minutes {
          color: #a5b1c2;
          font-size: 0.8em;
          display: flex;
          align-items: center;
        }
        .reading-minutes :global(p) {
          margin: 0.5em 0;
        }
      `}</style>
    </div>
  );
};
