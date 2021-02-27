import { Link } from "react-router-dom";

export const Footer = () => {
    return <div className="footer">
        <Link to="/"> Home</Link>
        <Link to="/projects"> Projects</Link>
        <Link to="/contact"> Contact</Link>
    </div>
}