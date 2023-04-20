import './css/App.css';
import Box from './components/Box';
import About from './modules/About';
import Contact from './modules/Contact';
import Skill from './modules/Skill';

const App = () => {
    let titleAbout = "So, who am I?";
    let titleSkill = "Skills";
    let titleContact = "Contact";
    let contentAbout = <About />;
    let contenSkill = <Skill />;
    let contentContact = <Contact />;

    return (
        <div className='app'>
            <Box heading={ titleAbout } content={ contentAbout }/>
            <Box heading={ titleSkill } content={ contenSkill }/>
            <Box heading={ titleContact } content={ contentContact }/>
        </div>
    )
}

export default App;
