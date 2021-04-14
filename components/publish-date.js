export const PublishDate = ({ time }) => {
  return (
    <div className="publish-date">
      {time}
      <style jsx>{`
        .publish-date {
          color: #a5b1c2;
          font-size: 0.8em;
          display: flex;
          align-items: center;
          margin: 0.1em 0 0.5em;
        }
      `}</style>
    </div>
  );
};
