import { Link } from "react-router-dom";
import { Container } from '../components/container/container'
export const Footer = () => {
    return <div className="footer">
        <Container>
            <Link to="/"> Home</Link>
            <Link to="/projects"> Projects</Link>
            <Link to="/contact"> Contact</Link>
        </Container>
    </div>
}