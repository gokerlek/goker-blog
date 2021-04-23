export const Label = ({ children }) => {
  return (
    <div className="label">
      {children}
      <style jsx>{`
        .label {
          width: auto;
          display: inline-block;
          margin: 0.5em 0 1.4em 1em;
          color: white;
          padding: 0.5em 1em;
          border-radius: 4px;
          background-color: #0fb9b1;
          font-weight: 300;
          font-size: 0.7em;
          line-height: 1.2em;
          text-align: center;
        }
      `}</style>
    </div>
  );
};
