import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { xonokai } from 'react-syntax-highlighter/dist/cjs/styles/prism';
export const Code = ({ children, language = 'javascript' }) => {
  return (
    <div className="goker">
      <SyntaxHighlighter
        language={language}
        style={xonokai}
        customStyle={{
          borderRadius: '8px',
          backgroundColor: '#292929',
          width: '100%',
          fontSize: '5px',
        }}>
        {children}
      </SyntaxHighlighter>
      <style jsx>{`
        .goker {
          overflow-x: auto;
          max-width: 85vw;
        }
      `}</style>
    </div>
  );
};
