import { IconWithLink } from './icon-with-link';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { Container } from './container';
export const Footer = ({ footer }) => {
  const goker = (icons) => {
    switch (icons) {
      case 'twitter':
        return FaTwitter;
      case 'github':
        return FaGithub;
      case 'instagram':
        return FaInstagram;
      case 'linkedin':
        return FaLinkedinIn;
    }
  };
  return (
    <div className="footer">
      <Container>
        <h3>Göker ZAFER</h3>
        <p>{footer.shortBio}</p>
        {footer.socialLinks.map((socialLink) => (
          <IconWithLink link={socialLink.link} icon={goker(socialLink.icon)} />
        ))}
        <h5>{footer.copyright}</h5>
      </Container>
    </div>
  );
};
