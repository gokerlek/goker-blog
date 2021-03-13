import { Link } from 'react-router-dom';
import { Container } from '../components/container';
export const Header = () => {
  return (
    <div className="header">
      <Container>
        <Link to="/"> Home</Link>
        <Link to="/projects"> Projects</Link>
        <Link to="/aboutMe"> About Me</Link>
      </Container>
    </div>
  );
};
