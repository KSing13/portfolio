import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
    onClick: () => void;
}

const Header = ( {onClick} : Props) => {
    return (
        <div>
            <header className=''>
                <Button onClick={ onClick } colour="nav"><FontAwesomeIcon icon={['fab', 'apple']} /></Button>
            </header>
        </div>
    )
}

export default Header;