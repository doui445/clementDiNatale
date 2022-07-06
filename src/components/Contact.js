import '../styles/Contact.css'

function Contact() {
    return (
        <section id='contact-container'>
            <div id='contact'>
                <div className='contact-title-description-container'>
                    <div className='contact-title-container'>
                        <h2 className='contact-title'>CONTACT</h2>
                    </div>
                    <div className='contact-description-container'>
                        <p className='contact-description'>
                            Si vous voulez un événement magique, contactez Clément via ce formulaire!
                        </p>
                    </div>
                </div>
                <form className='contact-formulaire' method='post' action='traitement.js'>
                    <input type="text" name="name" placeholder="NOM PRÉNOM" />
                    <input type="text" name="societe" placeholder="SOCIÉTE" />
                    <input type="email" name="mail" placeholder="EMAIL" />
                    <input type="tel" name="tel" placeholder="TÉLÉPHONE" />
                    <textarea name="message" cols="100" rows="2" placeholder="VOTRE MESSAGE"></textarea>
                    <button type='submit' className='btn btn-primary'>Envoyer</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;