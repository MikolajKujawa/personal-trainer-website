import React from 'react';
import '../styles/Navigation.css';

const Navigation = () => {
    return ( 
        <nav class='navigation'>
            <ul>
                <li>
                    <a href='Strona Główna'>Strona głowna</a>
                </li>
                <li>
                    <a href='O mnie'>O mnie</a>
                </li>
                <li>
                    <a href='Oferta'>Oferta</a>
                </li>
                <li>
                    <a href='Kontakt'>Kontakt</a>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navigation;