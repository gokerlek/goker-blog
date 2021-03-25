import { IconWithLink } from './icon-with-link';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { Container } from './container';
import ReactMarkdown from 'react-markdown';
import logo from '../image/fil.png';
import Image from 'next/image';

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
      <Container width="960px" marg="0">
        <div className="logo-text-wrapper">
          <div className="logo-wrapper">
            <Image src={logo} layout="fixed" width={59} height={59} alt="logo" />
          </div>
          <h3>
            Göker <br /> Zafer
          </h3>
        </div>
        <ReactMarkdown>{footer.shortBio}</ReactMarkdown>
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
      <style jsx>
        {`
          .logo-text-wrapper {
            display: flex;
            align-items: center;
          }
          .footer {
            background-color: #d1d8e0;
            padding-top: 5em;
          }
          .footer :global(p) {
            margin: 0;
            font-weight: 300;
          }
          h3 {
            font-weight: 800;
            line-height: 2;
            margin-left: 0.5em;
          }
          h5 {
            font-weight: 300;
            color: #a5b1c2;
            text-align: center;
            margin-top: 3.8em;
          }
        `}
      </style>
    </div>
  );
};
