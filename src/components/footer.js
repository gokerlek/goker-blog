import { IconWithLink } from './icon-with-link';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { Container } from './container';
export const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <h3>Göker ZAFER</h3>
        <p>Hello,</p>
        <p>I am a passionate frontend developer!</p>
        <p>If you have an amazing project and want to work with me </p>
        <p>please dm me in one of the social media platforms.</p>
        <IconWithLink
          link="https://www.linkedin.com/in/gokerzafer/"
          icon={FaLinkedinIn}
        />
        <IconWithLink link="https://www.instagram.com/gokerlek" icon={FaInstagram} />
        <IconWithLink link="https://github.com/gokerlek" icon={FaGithub} />
        <IconWithLink link="https://twitter.com/gokerzfr" icon={FaTwitter} />
        <h5>© 2021 - 2021 www.gokerzafer.com - All Rights Reserved.</h5>
      </Container>
    </div>
  );
};
