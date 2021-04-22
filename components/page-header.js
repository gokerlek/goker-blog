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
          margin: 0.7em 0 0.4em;
        }

        @media screen and (max-width: 490px) {
          h1 {
            font-size: 2em;
          }
        }
      `}</style>
    </>
  );
};
