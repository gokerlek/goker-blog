import ReactMarkdown from 'react-markdown';

export const RichText = ({ children }) => {
  return (
    <div className="rich-text">
      <ReactMarkdown>{children}</ReactMarkdown>

      <style jsx>
        {`
          .rich-text :global(p) {
            line-height: 1.5em;
        `}
      </style>
    </div>
  );
};
