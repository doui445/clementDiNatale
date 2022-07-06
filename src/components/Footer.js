import '../styles/Footer.css'
import logo from '../assets/logo.PNG'
import fb from '../assets/fb.png'
import insta from '../assets/insta.png'
import ytb from '../assets/ytb.png'

function Footer() {
    return (
        <section id='footer-container'>
            <footer id='footer'>
                <div className='footer-contacts-container'>
                    <div className='footer-contacts'>
                        <h3 className='footer-contacts-title'>Me contacter</h3>
                        <div className='footer-contacts-text'>
                            <div className='email'>Email : <a href='mailto:dinatalecloseup@gmail.com'>dinatalecloseup@gmail.com</a></div>
                            <div className='phone'>Téléphone : <a href='tel:+33760698793'>07 60 69 87 93</a></div>
                            <div className='networks'>
                                <a href="https://www.facebook.com/clement.dinatale"><img className='networks-logo' src={fb} alt="fb img"></img></a>
                                <a href="https://www.instagram.com/clementdinatalemagic/"><img className='networks-logo' src={insta} alt="insta img"></img></a>
                                <a href="https://www.youtube.com/channel/UCnbTTnV4BRK-Wfsu6SjNJlw"><img className='networks-logo' src={ytb} alt="ytb img"></img></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-logo-container'>
                    <a href='#banner'><img className='footer-logo' src={logo} alt='logo img'></img></a>
                </div>
                <div className='footer-specialties-container'>
                    <div className='footer-specialties'>
                        <h3 className='footer-spacialties-title'>Mes spécialités</h3>
                        <ul className='footer-specialties-text'>
                            <li>Magicien | Mentaliste</li>
                            <li>Montpellier | Paris</li>
                            <li>Cours de magie | Close up</li>
                            <li>Atelier magie | Spectacles</li>
                            <li>Événements | Mariages</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default Footer