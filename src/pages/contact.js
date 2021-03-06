import { ImageWrapper } from '../components/image-wrapper/image-wrapper';
import instagram from '../images/instagram.svg';
import github from '../images/github.svg';
import twitter from '../images/twitter.svg';
import linkedin from '../images/linkedin.svg';
export const ContactPage = () => {
    return <div>
        Contact me
        <ImageWrapper>
            <a href="https://www.instagram.com/gokerlek/"> <img src={instagram} /> </a>
        </ImageWrapper>
        <ImageWrapper>
            <a href="https://github.com/gokerlek"> <img src={github} /> </a>
        </ImageWrapper>
        <ImageWrapper>
            <a href="https://twitter.com/gokerzfr"> <img src={twitter} /> </a>
        </ImageWrapper>
        <ImageWrapper>
            <a href="https://www.linkedin.com/in/gokerzafer/"> <img src={linkedin} /> </a>
        </ImageWrapper>
    </div>
}