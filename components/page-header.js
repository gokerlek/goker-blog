export const PageHeader = ({ children }) => {
  return (
    <>
      <h1>{children}</h1>
      <style jsx>{`
        h1 {
          font-weight: 800;
          font-size: 3em;
          line-height: 1.5em;
          color: #4b6584;
        }
      `}</style>
    </>
  );
};
