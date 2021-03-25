export const Label = ({ children, usedTechnologies }) => {
  return (
    <div className="label">
      {children}
      <h6>{usedTechnologies}</h6>
      <style jsx>{`
        .label {
          width: auto;
          display: inline-block;
          margin: 0.5em 0 1.4em 1em;
        }
      `}</style>
    </div>
  );
};
