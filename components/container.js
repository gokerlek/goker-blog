export const Container = ({ children, width = '720px', marg = '4.3125em' }) => {
  return (
    <div className="container">
      {children}
      <style jsx>{`
        .container {
          margin: 0 auto ${marg};
          max-width: ${width};
        }
      `}</style>
    </div>
  );
};
