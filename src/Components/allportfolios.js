import port1 from '../img/portImages/port2.jpg';
import port2 from '../img/portImages/port1.jpg';
import port4 from '../img/portImages/port3.jpg';
import port6 from '../img/portImages/port5.jpg';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const portfolios = [
    {
        id: 1,
        category: 'Python',
        link2: 'www.github.com',
        icon1: <Link to={{pathname: "https://github.com/asardie/Calendar"}} target="_blank" className="icon-holder">
                    <FontAwesomeIcon icon={faGithub} className="icon gh" />
                </Link>,
        image: port2,
        title: 'Python Code Clinics Command Line App'
    },
    {
        id: 2,
        category: 'React Js',
        link2: 'www.github.com',
        icon1: <Link to={{pathname: "https://github.com/nngcai/portfolio"}} target="_blank" className="icon-holder">
                    <FontAwesomeIcon icon={faGithub} className="icon gh" />
                </Link>,
        image: port6,
        title: 'React Portfolio Website'
    },
    {
        id: 3,
        category: 'Java',
        link2: 'www.github.com',
        icon1: <Link to={{pathname: "https://github.com/wtc-cohort-2020/0045-robot-worlds"}} target="_blank" className="icon-holder">
                    <FontAwesomeIcon icon={faGithub} className="icon gh" />
                </Link>,
        image: port4,
        title: 'Multiplayer Command Line robot simulation'
    },
    {
        id: 4,
        category:'Java',
        link2: 'www.github.com',
        icon1: <Link to={{pathname: "https://github.com/nngcai/springboot-demo"}} target="_blank" className="icon-holder">
                    <FontAwesomeIcon icon={faGithub} className="icon gh" />
                </Link>,
        image: port1,
        title: 'A quickstart guide on how to create a REST service using SpringBoot for Java'
    }
]

export default portfolios;