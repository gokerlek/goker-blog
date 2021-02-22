import './App.css';
import { Header } from './header.js';
import { Container } from './container.js';
import { Day1 } from './day1.js';
import { Footer } from './footer.js';

const App = () => {
  return (<div className="layout">
    <Header />
    <Container>
      <Day1 />
    </Container>
    <Footer />
  </div>);
}
export default App;
