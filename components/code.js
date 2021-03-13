import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { xonokai } from 'react-syntax-highlighter/dist/cjs/styles/prism';
export const Code = ({ children, language = 'javascript' }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={xonokai}
      customStyle={{ borderRadius: '10px', backgroundColor: '#292929' }}>
      {children}
    </SyntaxHighlighter>
  );
};
