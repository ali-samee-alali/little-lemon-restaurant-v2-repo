import logo from './assets/logo.png';
import {ReactComponent as Logo} from './assets/Logo .svg';
function Nav () {
    return (
        <nav className="nav">
            <Logo className="nav-logo" />
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#reservations">Reservations</a></li>
                <li><a href="#order-online">Order Online</a></li>
                <li><a href="#login">Login</a></li>
            </ul>
        </nav>
    );
};

export default Nav;