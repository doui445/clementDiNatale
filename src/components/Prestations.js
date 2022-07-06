import '../styles/Prestations.css'
import prestimg from '../assets/prestation.JPG'

function Prestations() {

    /*
        let prestaButton = document.querySelector(".button")
    prestaButton.addEventListener("click", () => {
        switch (prestaButton.value) {
            case 'cocktail/repas' :
                console.log('11111111');
                break;
            case 'congrès/séminaire' :
                console.log('22222222');
                break;
            default :
                console.log('33333');
        }
    });
    */

    return (
        <section id='prestations-container'>
            <div id='prestations'>
                <div className='prestations-intro-container'>
                    <div className='prestations-intro'>
                        <div className='prestations-intro-title-container'>
                            <h2 className='prestations-intro-title'>
                                Des prestations faites pour vous!
                            </h2>
                        </div>
                        <div className='prestations-intro-description-container'>
                            <div className='prestation-intro-description'>
                                Cliquez sur le type de prestation qui vous intéresse ! <br />
                                Et si vous ne trouvez pas votre bonheur ? <a href="#Form-container">Cliquez-ici.</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='prestations-titles-container'>
                    <ul className='prestations-titles'>
                        <li className='prestations-title 1 active'>Événement professionnel</li>
                        <li className='prestations-title 2'>Événement particulier</li>
                        <li className='prestations-title 3'>Cours de magie</li>
                        <li className='prestations-title 4'>Conférences</li>
                    </ul>
                </div>
                <div className='prestations-description-container'>
                    <div className='prestations-description'>
                        <div className='text-image-container'>
                            <div className='text-container'>
                                <div className='prestations-description-text'>
                                    Du cocktail dinatoire au team building en passant par une conférence spectacle, les prestations de Ben sont personnalisables.
                                    Pour divertir vos collaborateurs, fidéliser vos clients ou fédérer votre équipe ? La magie est un réel outil.
                                    Ben travaillera avec votre équipe pour rendre votre événement professionnel « marquant ».
                                    Utiliser la magie comme vecteur de communication : faites le pari original, novateur et marquant pour vos invités.
                                </div>
                            </div>
                            <div className='image-container'>
                                <img className='prestations-description-image' src={prestimg} alt='prestation img'></img>
                            </div>
                        </div>
                        <div className='buttons-container'>
                            <div className='more-buttons-container'>
                                <button className='button active' /*onClick={() => document.querySelector("prestations-description-text").innerHTML="ouabfobapm"}*/>cocktail/repas</button>
                                <button className='button'>congrès/séminaire</button>
                                <button className='button'>team building</button>
                                <button className='button'>conférence</button>
                            </div>
                            <a href='#contact-container' className='devis-button-container'>
                                <button className='devis-button'>Obtenir un devis</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Prestations;