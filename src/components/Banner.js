import '../styles/Banner.css'
import logo from '../assets/logo.PNG'

import banimg1 from '../assets/banniere1.jpeg'
import banimg2 from '../assets/banniere2.jpeg'
import banimg3 from '../assets/banniere3.jpeg'
import banimg4 from '../assets/banniere4.jpeg'

function Banner() {
    return (
        <section id='banner-container'>
            <div id='banner'>
                <div className='banner-images-container'>
                    <div className='banner-images'>
                        <img className='banner-image-1' src={banimg1} alt='banner img'></img>
                        <img className='banner-image-2' src={banimg2} alt='banner img'></img>
                        <img className='banner-image-3' src={banimg3} alt='banner img'></img>
                        <img className='banner-image-4' src={banimg4} alt='banner img'></img>
                    </div>
                </div>
                <div className='banner-logo-container'>
                    <img className='banner-logo' src={logo} alt='logo img'></img>
                </div>
            </div>
        </section>
    )
}

export default Banner;