export const IconWithLink = ({ icon, link, color = '#009fb7' }) => {
  const IconComponent = icon;
  return (
    <a href={link} className="icon-wrapper">
      <IconComponent />
      <style jsx>{`
        .icon-wrapper {
          width: 2em;
          height: 2em;
          overflow: hidden;
          margin: 0.5em 1em 0.5em 0;
          display: inline-block;
          color: ${color};
        }
        .icon-wrapper:hover {
          color: #292929;
        }
      `}</style>
    </a>
  );
};
