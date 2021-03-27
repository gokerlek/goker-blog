import { Code } from './code';
import RichText from './rich-text';

export const Blocks = ({ blocks }) => {
  return (
    <>
      {blocks.map((block) => (
        <div key={block.id}>
          {block.title ? <div className="block-title">{block.title}</div> : null}
          {block.template === 'code-block' ? (
            <Code language={block.language}>{block.code}</Code>
          ) : block.template === 'text-block' ? (
            <RichText>{block.content}</RichText>
          ) : block.template === 'image-block' ? (
            <img src={block.image} />
          ) : null}
        </div>
      ))}
    </>
  );
};
