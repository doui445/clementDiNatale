import '../styles/Gallery.css'
import gallery1 from '../assets/gallery/gallery1.jpeg'
import gallery2 from '../assets/gallery/gallery2.jpeg'
import gallery3 from '../assets/gallery/gallery3.png'
import gallery4 from '../assets/gallery/gallery4.jpeg'
import gallery5 from '../assets/gallery/gallery5.jpeg'
import gallery6 from '../assets/gallery/gallery6.jpeg'
import gallery7 from '../assets/gallery/gallery7.jpeg'
import gallery8 from '../assets/gallery/gallery8.jpeg'
import gallery9 from '../assets/gallery/gallery9.png'
import gallery10 from '../assets/gallery/gallery10.jpeg'
import gallery11 from '../assets/gallery/gallery11.jpeg'
import gallery12 from '../assets/gallery/gallery12.jpeg'
import gallery13 from '../assets/gallery/gallery13.jpeg'
import gallery14 from '../assets/gallery/gallery14.jpeg'
import gallery15 from '../assets/gallery/gallery15.jpeg'
import gallery16 from '../assets/gallery/gallery16.jpeg'
import gallery17 from '../assets/gallery/gallery17.jpeg'
import gallery18 from '../assets/gallery/gallery18.jpeg'
import gallery19 from '../assets/gallery/gallery19.jpeg'
import gallery20 from '../assets/gallery/gallery20.png'


function Gallery() {
    return (
        <section id='gallery-container'>
            <div id='gallery'>
                <img className='gallery-image' src={gallery1} alt='gallery img'></img>
                <img className='gallery-image' src={gallery2} alt='gallery img'></img>
                <img className='gallery-image' src={gallery3} alt='gallery img'></img>
                <img className='gallery-image' src={gallery4} alt='gallery img'></img>
                <img className='gallery-image' src={gallery5} alt='gallery img'></img>
                <img className='gallery-image' src={gallery6} alt='gallery img'></img>
                <img className='gallery-image' src={gallery7} alt='gallery img'></img>
                <img className='gallery-image' src={gallery8} alt='gallery img'></img>
                <img className='gallery-image' src={gallery9} alt='gallery img'></img>
                <img className='gallery-image' src={gallery10} alt='gallery img'></img>
                <img className='gallery-image' src={gallery11} alt='gallery img'></img>
                <img className='gallery-image' src={gallery12} alt='gallery img'></img>
                <img className='gallery-image' src={gallery13} alt='gallery img'></img>
                <img className='gallery-image' src={gallery14} alt='gallery img'></img>
                <img className='gallery-image' src={gallery15} alt='gallery img'></img>
                <img className='gallery-image' src={gallery16} alt='gallery img'></img>
                <img className='gallery-image' src={gallery17} alt='gallery img'></img>
                <img className='gallery-image' src={gallery18} alt='gallery img'></img>
                <img className='gallery-image' src={gallery19} alt='gallery img'></img>
                <img className='gallery-image' src={gallery20} alt='gallery img'></img>
            </div>
        </section>
    )
}

export default Gallery;