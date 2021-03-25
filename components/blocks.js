import { Code } from './code';
import ReactMarkdown from 'react-markdown';

export const Blocks = ({ blocks }) => {
  return (
    <>
      {blocks.map((block) => (
        <div key={block.id}>
          {block.title ? <div className="block-title">{block.title}</div> : null}
          {block.template === 'code-block' ? (
            <Code language={block.language}>{block.code}</Code>
          ) : block.template === 'text-block' ? (
            <ReactMarkdown>{block.content}</ReactMarkdown>
          ) : block.template === 'image-block' ? (
            <img src={block.image} />
          ) : null}
        </div>
      ))}
    </>
  );
};
