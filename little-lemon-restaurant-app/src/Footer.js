import {ReactComponent as Logo} from './assets/Logo .svg';
function Footer () {
    return (
        <footer className="footer">
            <Logo />
            <>
                <h4>Doormat Navigation</h4>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#reservations">Reservations</a></li>
                    <li><a href="#order-online">Order Online</a></li>
                    <li><a href="#login">Login</a></li>
                </ul>
            </>
            <>
                <h4>Contact</h4>
                <p>123 Main Street, Anytown, USA</p>
                <p>(555) 123-4567</p>
            </>
            <>
                <h4>Social Media Links</h4>
                <ul>
                    <li><a href='instagram.com'>Instagram</a></li>
                    <li><a href='facebook.com'>Facebook</a></li>
                    <li><a href='twitter.com'>Twitter</a></li>
                </ul>
            </>
        </footer>
    );
};


export default Footer;