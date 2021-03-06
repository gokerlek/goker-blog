import { ImageWrapper } from '../components/image-wrapper/image-wrapper';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export const ContactPage = () => {
    return <div>
        <h3>Contact me </h3>
        <p>Hello,</p>
        <p>I am a web developer</p>
        <p>If you want to do a project with me</p>
        <p>Let's keep in touch</p>
        <p>+90 542 323 92 48</p>
        <p>gokerlek@gmail.com </p>
        <p>Urla-IZMIR-TURKEY</p>
        <ImageWrapper>
            <a href="https://www.instagram.com/gokerlek/"> <FaInstagram className="social" /> </a>
        </ImageWrapper>
        <ImageWrapper>
            <a href="https://github.com/gokerlek"> <FaGithub className="social" /> </a>
        </ImageWrapper>
        <ImageWrapper>
            <a href="https://twitter.com/gokerzfr"> <FaTwitter className="social" /> </a>
        </ImageWrapper>
        <ImageWrapper>
            <a href="https://www.linkedin.com/in/gokerzafer/"> <FaLinkedinIn className="social" /> </a>
        </ImageWrapper>
    </div>
}