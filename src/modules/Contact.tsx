import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons';

const items = [{
                id: "gh",
                name: "GitHub",
                href: "https://github.com/KSing13",
                icon: faGithub
            },
            {
                id: "ln",
                name: "LinkedIn",
                href: "https://www.linkedin.com/in/kay-sing-liew/",
                icon: faLinkedin
            },
            {
                id: "tt",
                name: "TikTok",
                href: "../src/images/ks_tt.jpg",
                icon: faTiktok
            }];

const Contact = () => {
    return (
        <div className="dv-flex">
            {items.map((item) => (
                <div 
                    key={ item.id } 
                    className="dv-flex-content"
                >
                    <a href={ item.href } target="_blank" aria-hidden="true"><FontAwesomeIcon icon={ item.icon } size="6x" /></a>
                </div>
            ))}
        </div>
    )
}

export default Contact;