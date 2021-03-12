import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism';
export const Code = ({ children, language = 'javascript' }) => {
  xonokai.borderRadius = '100px';
  return (
    <SyntaxHighlighter language={language} style={xonokai}>
      {children}
    </SyntaxHighlighter>
  );
};
