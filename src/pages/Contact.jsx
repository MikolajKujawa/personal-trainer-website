import React from 'react';
import '../styles/pages-styles/Contact.sass'

const Contact = () => {
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [topic, setTopic] = React.useState('');
    const [message, setMessage] = React.useState('');

    const changeUsername = e => setUsername(e.target.value)
    const changeEmail = e => setEmail(e.target.value)
    const changeTopic = e => setTopic(e.target.value)
    const changeMessage = e => setMessage(e.target.value)

    const handleSubmit = () => {

    }

    return ( 
        <div className="Contact">
            <section className="dane">
                <h1>Kontakt</h1>
                <span>
                    <p>tel: 111 222 333</p>
                    <p>email: juliagamelska@gmail.com</p>
                    <p>nr. konta bankowego: 00 1111 2222 3333 4444 5555 6666</p>
                </span>
            </section>

            <section className="formularz">
                <h1>Formularz Kontaktowy</h1>
                <form onSubmit={handleSubmit} noValidate>
                    <label htmlFor='user'>
                        <p>Imię i nazwisko:</p>
                        <input type='text' id='user' value={username} onChange={changeUsername}/>
                    </label>
                    <label htmlFor='email'>
                        <p>Adres Email:</p>
                        <input type='email' id='email' value={email} onChange={changeEmail}/>
                    </label>
                    <label htmlFor='topic'>
                        <p>Temat:</p>
                        <input type='text' id='topic' value={topic} onChange={changeTopic}/>
                    </label>
                    <label htmlFor='message'>
                        <p>Treść Wiadomości:</p>
                        <textarea cols="90" rows="15" id='message' value={message} onChange={changeMessage}/>
                    </label>
                </form>               
            </section>
        </div>
     );
}
 
export default Contact;