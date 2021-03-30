export const IconWithLink = ({ icon, link, color = '#009fb7' }) => {
  const IconComponent = icon;
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <IconComponent className="icon-wrapper" />
      <style jsx>{`
        .icon-wrapper {
          margin: 0.5em 1em 0.5em 0;
          display: inline-block;
          color: ${color};
          width: 1.38em;
          height: 1.38em;
        }
        .icon-wrapper:hover {
          color: #292929;
        }
      `}</style>
    </a>
  );
};
