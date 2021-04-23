export const Container = ({ children, small = false }) => {
  return (
    <div className="container">
      {children}
      <style jsx>{`
        .container {
          margin: 0 auto;
          padding: 0 2em;
          max-width: ${small ? 720 : 960}px;
        }
      `}</style>
    </div>
  );
};
