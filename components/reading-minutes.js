import { FaStopwatch } from 'react-icons/fa';

export const ReadingMinutes = ({ text }) => {
  return (
    <div className="reading-minutes">
      <FaStopwatch />
      {Math.floor(text.split(' ').length / 180) < 1
        ? Math.floor(text.split(' ').length / 3) + ' seconds '
        : Math.floor(text.split(' ').length / 180) + ' minutes '}
      <>reads</>
      <style jsx>{`
        .reading-minutes {
          color: #a5b1c2;
          margin: 0.5em 0 0.5em 2.5em;
          font-size: 0.8em;
          display: flex;
          align-items: center;
        }
      `}</style>
    </div>
  );
};
