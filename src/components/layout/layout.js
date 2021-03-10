import { Footer } from '../footer';
import { Header } from '../header';
export const Layout = ({ children }) => {
    return <div className="layout">
        <Header />
        <div> {children} </div>
        <Footer />
        <style jsx>{`
            .layout {
                display:grid;
                grid-template-rows: 80px minmax(calc(100vh - 80px),max-content) minmax(150px, max-content);
                }
        
            `}</style>
    </div>

}