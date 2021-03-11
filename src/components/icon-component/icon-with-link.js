export const IconWithLink = ({ icon, link }) => {
  const IconComponent = icon;
  return (
    <a href={link} className="icon-wapper">
      <style jsx>{`
        .icon-wapper {
          width: 1em;
          height: 1em;
          overflow: hidden;
          margin: 0.5em 1em;
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
