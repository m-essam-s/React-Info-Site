import reactLogo from '../assets/react.svg';

const Logo = () => <img src={reactLogo} className="logo react " alt="React logo"/>;
const Title = () => <h3 className="nav--logo_text">React Facts</h3>;
const Subtitle = () => <h4 className="nav--title">React Curse - Project 1</h4>;


const Navbar = () => {
    return (
        <nav>
            <Logo />
            <Title />
            <Subtitle />
        </nav>
    );
}

export default Navbar;