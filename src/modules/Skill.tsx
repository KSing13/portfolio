import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGit, faJs, faReact, faNode, faPhp, faLaravel, faHtml5, faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';

const items: any[]  = [{
                            title: "Git/Github",
                            colour: "code1",
                            icon: faGit
                        },
                        {
                            title: "TypeScript",
                            colour: "code2",
                            icon: faFaceSmile
                        },
                        {
                            title: "JavaScript",
                            colour: "code3",
                            icon: faJs
                        },
                        {
                            title: "jQuery",
                            colour: "code4",
                            icon: faFaceSmile
                        },
                        {
                            title: "React js",
                            colour: "code5",
                            icon: faReact
                        },
                        {
                            title: "Node js",
                            colour: "code6",
                            icon: faNode
                        },
                        {
                            title: "PHP",
                            colour: "code7",
                            icon: faPhp
                        },
                        {
                            title: "Laravel",
                            colour: "code8",
                            icon: faLaravel
                        },
                        {
                            title: "HTML",
                            colour: "code9",
                            icon: faHtml5
                        },
                        {
                            title: "CSS",
                            colour: "code10",
                            icon: faCss3
                        },
                        {
                            title: "MySQL",
                            colour: "code11",
                            icon: faFaceSmile
                        },
                        {
                            title: "REST API",
                            colour: "code12",
                            icon: faFaceSmile
                        },
                        {
                            title: "Data Science Foundations",
                            colour: "code1",
                            icon: faFaceSmile
                        }];

const Skill = () => {
    return (
        <div className="dv-flex">
            <div className="dv-flex-content">
                <ol className="list-skill-custom">
                    {items.map((item, index) => (
                        <li 
                            key={ index } 
                            className={"list-skill-" + item.colour}
                        >
                            <div className="icon"><FontAwesomeIcon icon={ item.icon } size="1x" /></div>
                            <div className="title">{ item.title }</div>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default Skill;