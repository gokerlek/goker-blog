import { Layout } from '../components/layout';
import { Container } from '../components/container';

const ContactPage = () => {
  return (
    <Layout title="Göker Blog - Contact me">
      <Container>
        <div>
          <h3>I'm Göker ZAFER </h3>
          <p>
            I live in Urla in Turkey and I want to be a freelance web developer. I want
            to create useful, needs-oriented, and innovative web pages for individuals
            and companies. For this purpose, I have been learning HTML, CSS, and
            JavaScript languages for six months. When my learning process is over. I will
            be able to make web pages that can work on all devices.
          </p>
          <p>
            I graduated from Istanbul Technical University, Department of Chemistry. I
            worked as a manager in various companies in Istanbul and Izmir. I arranged
            the production plans. I turned companies into more efficient and profitable
            ones. Thanks to my career, I will understand customers easily.
          </p>
        </div>
      </Container>
    </Layout>
  );
};

export default ContactPage;
