export const Copyright = ({ text }) => {
  return (
    <div className="copyright">
      {text}
      <style jsx>{`
        .copyright {
          font-weight: 300;
          color: #a5b1c2;
          text-align: center;
          margin-top: 0.2em;
          font-size: 0.8em;
        }
      `}</style>
    </div>
  );
};
