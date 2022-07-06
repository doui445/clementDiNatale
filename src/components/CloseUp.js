import '../styles/CloseUp.css'
import closeup1 from '../assets/closeup1.jpeg'
import closeup2 from '../assets/closeup2.jpeg'

function CloseUp() {
    return (
        <section id='closeup-container'>
            <div id='closeup'>
                <div className='closeup-images-container'>
                    <div className='closeup-images'>
                        <img className='closeup-image' src={closeup1} alt='close up img'></img>
                        <img className='closeup-image' src={closeup2} alt='close up img'></img>
                    </div>
                </div>
                <div className='closeup-title-container'>
                    <h2 className='closeup-title'>CLOSE - UP</h2>
                </div>
                <div className='closeup-description-container'>
                    <p className='closeup-description'>
                        Clément est spécialisé dans la magie dites de close-up dans laquelle il réalisera des tours a quelques centimètres des spectateurs mais également directement dans leurs mains, ce qui leur permet de vivre pleinement l'expérience. 
                        La magie de close-up est souvent utilisée dans les cocktails ou dîners. 
                        Clément séduit le public grâce à son humour, sa modernité et son contacte avec le public.<br /><br />
                        La plupart des personnes n'ont jamais vu un magicien en vrai, prendre un magicien de close-up permet de leur donner une vrai première expérience magique et ainsi marquer leur esprits et renforcer l'impact de votre évènement.<br /><br />
                        En close-up clément allie magie classique, mentalisme et magie numérique pour vous permettre de vivre une expérience complète.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default CloseUp;