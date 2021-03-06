import { ImageWrapper } from '../components/image-wrapper/image-wrapper';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
export const ContactPage = () => {
    return <div>
        <h3>Contact me </h3>
        <p>+90 542 323 92 48</p>
        <p>gokerlek@gmail.com </p>
        <p>Urla-IZMIR-TURKEY</p>
        <ImageWrapper>
            <a href="https://www.instagram.com/gokerlek/"> <RiInstagramFill /> </a>
        </ImageWrapper>
        <ImageWrapper>
            <a href="https://github.com/gokerlek"> <FaGithub /> </a>
        </ImageWrapper>
        <ImageWrapper>
            <a href="https://twitter.com/gokerzfr"> <FaTwitter /> </a>
        </ImageWrapper>
        <ImageWrapper>
            <a href="https://www.linkedin.com/in/gokerzafer/"> <FaLinkedinIn /> </a>
        </ImageWrapper>
    </div>
}