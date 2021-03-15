import { IconWithLink } from './icon-with-link';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { Container } from './container';
export const Footer = (footer) => {
  return (
    <div className="footer">
      <Container footer={footer}></Container>
    </div>
  );
};
