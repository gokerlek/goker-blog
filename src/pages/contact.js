import { IconWithLink } from '../components/icon-with-link';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
export const ContactPage = () => {
  return (
    <div>
      <h3>Contact me </h3>
      <p>Hello,</p>
      <p>I am a web developer</p>
      <p>If you want to do a project with me</p>
      <p>Let's keep in touch</p>

      <IconWithLink
        link="https://www.linkedin.com/in/gokerzafer/"
        icon={FaLinkedinIn}
      />
      <IconWithLink link="https://www.instagram.com/gokerlek" icon={FaInstagram} />
      <IconWithLink link="https://github.com/gokerlek" icon={FaGithub} />
      <IconWithLink link="https://twitter.com/gokerzfr" icon={FaTwitter} />
    </div>
  );
};
