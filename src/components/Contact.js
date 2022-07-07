import '../styles/Contact.css'
import ContactFormulaire from './ContactFormulaire';

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
                <div className='contact-formulaire-container'>
                    <ContactFormulaire />
                </div>
            </div>
        </section>
    )
}

export default Contact;