import '../styles/Header.css'

import logo from '../assets/logo.PNG'

function Header() {

    return (
        <section id='header-container'>
            <header id='header'>
                <div className='header-menu-container'>
                    <nav className='header-menu'>
                        <a className='menu-item' href="#bio-container">Biographie</a>
                        <a className='menu-item' href="#prestations-container">Prestations</a>
                    </nav>
                </div>
                <div className='header-logo-container'>
                    <a href='#banner'><img className='header-logo' src={logo} alt='logo img'></img></a>
                </div>
                <div className='header-menu-container'>
                    <nav className='header-menu'>
                        <a className='menu-item' href="#gallery-container">Galerie</a>
                        <a className='menu-item' href="#contact-container">Contacter</a>
                    </nav>
                </div>
            </header>
        </section>
    )
}

export default Header