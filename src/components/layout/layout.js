import { Footer } from '../footer';
import { Header } from '../header';
import './layout.css';
export const Layout = ({ children }) => {
    return <div className="layout">
        <Header />
        <div> {children} </div>
        <Footer />
    </div>
}