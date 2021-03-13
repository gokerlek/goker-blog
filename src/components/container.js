export const Container = ({ children }) => {
  return (
    <div className="container">
      {children}
      <style jsx>{`
        .container {
          margin: 0 auto;
          max-width: 740px;
        }
      `}</style>
    </div>
  );
};
