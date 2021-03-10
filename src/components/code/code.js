export const Code = ({ children }) => {
    return <div className="code">
        {children}

        <style jsx>{`
     .code {
        min-height: 20px;
        max-width: 1000px;
        background-color: rgb(38, 144, 194);
        color:rgb(243, 243, 243);
        border: 1px solid rgb(38, 144, 194);
        border-radius: 5px;
        margin: 2px 5px;
        padding: 10px 5px;
      }
    `}</style>
    </div>
}