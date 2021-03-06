import './icon-component.css';
export const IconWithLink = ({ icon, link }) => {
    const IconComponent = icon;
    return <a href={link} className="icon-wapper"><IconComponent /></a>
}