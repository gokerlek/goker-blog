import { IconWithLink } from './icon-with-link';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { Container } from './container';

const getIcon = (icons) => {
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

export const Footer = ({ footer }) => {
  return (
    <div className="footer">
      <Container>
        <h3>Göker ZAFER</h3>
        <p>{footer.shortBio}</p>
        {footer.socialLinks.map((socialLink) => (
          <IconWithLink
            key={socialLink.id}
            link={socialLink.link}
            icon={getIcon(socialLink.icon)}
            color={socialLink.color}
          />
        ))}
        <h5>{footer.copyright}</h5>
      </Container>
    </div>
  );
};
