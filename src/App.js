import './App.css';
import { Wrapper } from './wrapper.js'
import { Header } from './header.js';
import { Container } from './container.js';
import { Day1 } from './day1.js';
import { Footer } from './footer.js';

const App = () => {
  return (<div className="layout">
    <Wrapper>
      <Header />
      <Container>
        <Day1 />
      </Container>
      <Footer />
    </Wrapper>
  </div>);
}
export default App;
