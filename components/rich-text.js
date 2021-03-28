import ReactMarkdown from 'react-markdown';

export const RichText = ({ children, small = false, narrow = false }) => {
  return (
    <div className="rich-text">
      <ReactMarkdown>{children}</ReactMarkdown>

      <style jsx>
        {`
          .rich-text :global(p) {
            margin: ${small ? '1.5em 2em' : null};
            line-height: ${narrow ? 0.8 : 1.5}em;
        `}
      </style>
    </div>
  );
};
export default RichText;
