import { IconWithLink } from './icon-component/icon-with-link';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Container } from './container/container'
export const Footer = () => {
    return <div className="footer">
        <Container>
            <p>Hello,</p>
            <p>I am a web developer</p>
            <p>If you want to do a project with me</p>
            <p>Let's keep in touch</p>
            <IconWithLink link="https://www.linkedin.com/in/gokerzafer/" icon={FaLinkedinIn} />
            <IconWithLink link="https://www.instagram.com/gokerlek" icon={FaInstagram} />
            <IconWithLink link="https://github.com/gokerlek" icon={FaGithub} />
            <IconWithLink link="https://twitter.com/gokerzfr" icon={FaTwitter} />
        </Container>
    </div>
}