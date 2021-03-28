import ReactMarkdown from 'react-markdown';

export const RichText = ({ children, small = false }) => {
  return (
    <div className="rich-text">
      <ReactMarkdown>{children}</ReactMarkdown>

      <style jsx>
        {`
          .rich-text :global(p) {
            margin: ${small ? '1.5em 2em' : null};
            line-height: 1.5em;
          }
        `}
      </style>
    </div>
  );
};
export default RichText;
