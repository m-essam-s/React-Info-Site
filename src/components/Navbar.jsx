import reactLogo from '/react.svg';
import propsTypes from 'prop-types';

const Navbar = (props) => {
    return (
        <nav 
            className={props.darkMode ? "dark": ""}
        >
            <img src={reactLogo} className="logo react " alt="React logo"/>
            <h3 className="nav--logo_text">React Facts</h3>
            <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    darkMode: propsTypes.bool.isRequired,
    toggleDarkMode: propsTypes.func.isRequired
}

export default Navbar;