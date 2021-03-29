import { IconWithLink } from './icon-with-link';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { Container } from './container';
import { RichText } from './rich-text';
import { Logo } from './logo';
import { Copyright } from './copyright';

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
        <Logo hasName />
        <RichText narrow>{footer.shortBio}</RichText>
        {footer.socialLinks.map((socialLink) => (
          <IconWithLink
            key={socialLink.id}
            link={socialLink.link}
            icon={getIcon(socialLink.icon)}
            color={socialLink.color}
          />
        ))}
        <Copyright>{footer.copyright}</Copyright>
      </Container>
      <style jsx>
        {`
          .footer {
            background-color: #d1d8e0;
            padding-top: 2.5em;
          }
        `}
      </style>
    </div>
  );
};
