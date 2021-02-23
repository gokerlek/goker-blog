import { Link } from "react-router-dom";

export const Header = () => {
    return <div className="header">
        <Link to="/"> Home</Link>
        <Link to="/projects"> Projects</Link>
        <Link to="/contact"> Contact</Link>
    </div>
}