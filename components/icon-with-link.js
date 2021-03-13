export const IconWithLink = ({ icon, link }) => {
  const IconComponent = icon;
  return (
    <a href={link} className="icon-wapper">
      <style jsx>{`
        .icon-wapper {
          width: 1.5em;
          height: 1.5em;
          overflow: hidden;
          margin: 0.5em 1em 0.5em 0;
          display: inline-block;
          color: #009fb7;
        }
        .icon-wapper:hover {
          color: #292929;
        }
      `}</style>

      <IconComponent />
    </a>
  );
};
