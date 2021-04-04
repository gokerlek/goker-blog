export const PageImage = ({ image, source }) => {
  return (
    <div className="page-image">
      <img src={image} />
      {source ? `Source: ${source}` : null}

      <style jsx>{`
        .page-image {
          color: #a5b1c2;
          text-align: center;
          margin: 2em 0;
          font-weight: 300;
          font-size: 0.8em;
        }

        img {
          width: 100%;
          height: 22em;
          object-fit: cover;
          border-radius: 10px;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          margin: 1em 0 0.5em;
        }
      `}</style>
    </div>
  );
};
