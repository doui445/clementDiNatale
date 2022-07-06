import biogimg from '../assets/bio.jpeg'
import '../styles/Bio.css'

function Bio() {
    return (
        <section id="bio-container">
            <div id="bio">
                <img className="bio-image" src={biogimg} alt="bio" />
                <div className='bio-text-container'>
                    <h2 className='bio-title'>BIO</h2>
                    <p className='bio-text'>
                        Magicien professionnel performant partout en France, il propose également des prestations en anglais et se déplace partout dans le monde. <br /><br />
                        Une magie jeune, moderne, percutante et professionnel avec une petite touche d'humour. Voici quelques atouts représentants la magie de Clément Di Natale.
                        Passionné de magie depuis le plus jeune âge, Clément a largement eu le temps de rôder sa magie et de perfectionner ses tours afin de donner un moment inoubliable a ses spectateurs. Magicien professionnel spécialisé dans la magie de close-up, il fera vivre la magie directement dans le creux des mains de vos convives. <br /><br />
                        Habitué des mariages et cocktails dînatoires, dans lesquels il émerveille petits et grands en se déplaçant de groupe en groupe Clément est le parfait atout pour animer vos événements. Spécialiste de la manipulation, il vous fera vivre un moment unique avec simplement quelques pièces de monnaie ou des cartes et pour les plus friands, Clément propose de la magie numérique utilisant les nouvelles technologie mais pourra également vous faire vivre une expérience de mentalisme. <br /><br />
                        Clément propose des prestations sur-mesure et pourra répondre à tout type prestations et ainsi ajouter une touche de magie pour tout vos événements.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Bio;