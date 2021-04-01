import { FaStopwatch } from 'react-icons/fa';

export const ReadingMinutes = ({ text, small = false }) => {
  return (
    <div className="reading-minutes">
      <FaStopwatch />
      {text}
      <style jsx>{`
        .reading-minutes {
          color: #a5b1c2;
          margin: ${small ? 0 : '0.5em 0 0.5em 2.5em'};
          font-size: 0.8em;
          display: flex;
          align-items: center;
        }
      `}</style>
    </div>
  );
};
