export const Copyright = ({ text }) => {
  return (
    <div className="copyright">
      {text}

      <style jsx>{`
        .copyright {
          font-weight: 300;
          color: #a5b1c2;
          text-align: center;
          margin: 3em 0 1.5em 0;
          font-size: 0.8em;
        }
      `}</style>
    </div>
  );
};
