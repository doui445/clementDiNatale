import React from "react";
//import {send} from "emailjs-com";

class ContactFormulaire extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            society: '',
            mail: '',
            phone: '',
            message: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = JSON.stringify(this.state);
        console.log(data);
        /*send()*/
        alert('Le formulaire à bien été envoyé');
        this.setState({
            name: '',
            society: '',
            mail: '',
            phone: '',
            message: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='contact-formulaire'>
                <input 
                    type="text" 
                    name="name" 
                    value={this.state.name} 
                    onChange={this.handleChange} 
                    placeholder="NOM PRENOM" 
                    required
                />
                <input 
                    type="text" 
                    name="society" 
                    value={this.state.society} 
                    onChange={this.handleChange} 
                    placeholder="SOCIÉTÉ" 
                />
                <input 
                    type="email" 
                    name="mail" 
                    value={this.state.mail} 
                    onChange={this.handleChange} 
                    placeholder="EMAIL" 
                    required
                />
                <input 
                    type="tel" 
                    name="phone" 
                    value={this.state.phone} 
                    onChange={this.handleChange} 
                    placeholder="TÉLÉPHONE" 
                />
                <textarea 
                    name="message" 
                    cols="100" rows="2"
                    value={this.state.message} 
                    onChange={this.handleChange} 
                    placeholder="VOTRE MESSAGE" 
                    required
                ></textarea>
                <button type="submit" value='Envoyer'>Envoyer</button>
            </form>
        );
    }
}

export default ContactFormulaire;

/*<form className='contact-formulaire' method='post' action='traitement.js'>
                    <input type="text" name="name" placeholder="NOM PRÉNOM" />
                    <input type="text" name="societe" placeholder="SOCIÉTE" />
                    <input type="email" name="mail" placeholder="EMAIL" />
                    <input type="tel" name="tel" placeholder="TÉLÉPHONE" />
                    <textarea name="message" cols="100" rows="2" placeholder="VOTRE MESSAGE"></textarea>
                    <button type='submit' className='btn btn-primary'>Envoyer</button>
                </form>*/