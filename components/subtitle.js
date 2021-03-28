export const Subtitle = ({ children }) => {
  return (
    <div className="subtitle">
      {children}
      <style jsx>{`
        .subtitle {
          font-weight: 800;
          font-size: 1.2em;
          line-height: 2em;
          color: #4b6584;
        }
      `}</style>
    </div>
  );
};
