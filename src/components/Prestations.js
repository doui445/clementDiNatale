import '../styles/Prestations.css'
import prestimg from '../assets/prestation.JPG'

function Text() {
    return(
        <div>
            En passant par un cocktail dînatoire, un séminaire ou encore un team building, les prestations de Clément sont personnalisables sur-mesure afin d'avoir l'événement qui vous convient.
            La magie est un réel atout qui permettra de rendre votre événement professionnel « marquant » tout en ajoutant une touche de divertissement grâce a la magie.
        </div>
    )
}

function Prestations() {

    let Text1 = "Moment important de votre événement ou vos invités vont se détendre et discuter.<br /><br />Voici la formule close up (magie de proximité) qui laissera un souvenir inoubliable à vos invités. Clément évolue de groupe en groupe ou de table en table avec des tours modernes et percutants, directement dans les mains de vos invités.<br /><br />Un mélange entre magie et mentalisme avec une touche d'humour qui divertira l'ensemble de vos invités. (Les tours peuvent être personnalisables pour coller avec votre événement).";
    let Text2 = "Le moment important de l'année ou l'ensemble de vos collaborateurs seront réunis, alors pourquoi pas leur donner un moment magique ?<br /><br />Voici la formule close up (magie de proximité) qui laissera un souvenir inoubliable à vos invités. Clément évolue de groupe en groupe ou de table en table avec des tours modernes et percutants, directement dans les mains de vos invités.<br /><br />Un mélange entre magie et mentalisme avec une touche d'humour qui divertira l'ensemble de vos invités. (Les tours peuvent être personnalisables pour coller avec votre événement).";
    let Text3 = "Solution originale pour resserrer les liens de votre équipe, le team building avec une touche de magie semble être le bon choix !<br /><br />Des ateliers permettant de développer la créativité, la parole et la confiance en soi de votre équipe tout en leur donnant un moment de divertissement, Clément leur apprendra les bases de la magie et les feront travailler en équipe.";

    function handleClick1(e) {
        e.preventDefault();
        document.getElementById("button1").className = "button active";
        document.getElementById("button2").className = "button";
        document.getElementById("button3").className = "button";
        document.querySelector(".prestations-description-text").innerHTML=Text1;
    }
    function handleClick2(e) {
        e.preventDefault();
        document.getElementById("button1").className = "button";
        document.getElementById("button2").className = "button active";
        document.getElementById("button3").className = "button";
        document.querySelector(".prestations-description-text").innerHTML=Text2;
    }
    function handleClick3(e) {
        e.preventDefault();
        document.getElementById("button1").className = "button";
        document.getElementById("button2").className = "button";
        document.getElementById("button3").className = "button active";
        document.querySelector(".prestations-description-text").innerHTML=Text3;
    }

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
                                    <Text />
                                </div>
                            </div>
                            <div className='image-container'>
                                <img className='prestations-description-image' src={prestimg} alt='prestation img'></img>
                            </div>
                        </div>
                        <div className='buttons-container'>
                            <div className='more-buttons-container'>
                                <button id='button1' onClick={handleClick1} className='button'>cocktail/repas</button>
                                <button id='button2' onClick={handleClick2} className='button'>congrès/séminaire</button>
                                <button id='button3' onClick={handleClick3} className='button'>team building</button>
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