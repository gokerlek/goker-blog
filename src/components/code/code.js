import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism';
export const Code = ({ children, language }) => {
  const codeString = '(num) => num + 1';
  return (
    <SyntaxHighlighter language="javascript" style={xonokai}>
      {children}
    </SyntaxHighlighter>
  );
};
