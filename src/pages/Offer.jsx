import React from 'react';

import początkujący_img from '../images/offer1.jpg';
import two_pearson from '../images/trening_we_dwóch.jpg';
import coaching_care from '../images/coaching.jpg';

const Offer = (props) => {
    return ( 
        <div className="Offer">
            {descriptions(props)}
        </div>
     );
}
 
export default Offer;

const descriptions = (props) => {
    if(props.id === 'Trening dla początkujących - Online'){
        return(
            <>
                <article>
                    <img src={początkujący_img} alt="początkujący"></img>
                    <span>                        
                        <h2>Trening dla początkujących - Online</h2>
                        <ul>
                            <h3>Opłata</h3>
                            <li><p>Jednorazowa:</p><b>40zł</b></li>
                            <li><p>Miesięczna:</p><b>300zł</b></li>
                            <li><p>3-miesięczna:</p><b>850zł</b></li>
                        </ul>
                    </span> 
                </article>   

                <article className="description">
                    <h2>Opis</h2>
                    <ul>
                        <li>Potrzebujesz telefonu, internetu, kawałka podłogi i wygodnego ubrania!</li>
                        <li>Trening z własną masą ciała!</li>
                        <li>Bez sprzętu!</li>
                        <li>Bez wychodzenia z domu!</li>
                        <li>Nie tracisz czasu na dojazd!</li>
                        <li>Nie musisz mieć karnetu na siłownię!</li>
                    </ul>
                </article>               
            </>   
        ) 
    }
    else if(props.id === 'Trening dla 2 osób - online'){
        return(
            <>  
                <article>
                    <img src={two_pearson} alt="two_pearson"></img>
                    <span>
                        <h2>Trening dla 2 osób - online</h2>
                        <ul>
                            <h3>Opłata</h3>
                            <li><p>Jednorazowa:</p><b>60zł</b></li>
                            <li><p>Miesięczna:</p><b>500zł</b></li>
                            <li><p>3-miesięczna:</p><b>1200zł</b></li>
                        </ul>
                        
                    </span> 
                </article>
                
                <article className="description">
                    <h2>Opis</h2>
                    <ul>
                        <li>Dla Ciebie i Twojej bratniej duszy!</li>
                        <li>Wzajemna motywacja!</li>
                        <li>Trening uwzględnia Wasze umiejętności (Oboje dacie radę!)</li>
                        <li>Nielimitowany kontakt!</li>
                    </ul>
                </article>               
            </>   
        ) 
    }
    else if(props.id === 'Opieka trenerska - online'){
        return(
            <>
                <article>
                    <img src={coaching_care} alt="coaching_care"></img>
                    <span>
                        <h2>Opieka trenerska - online</h2>
                        <ul>
                           <h3>Opłata</h3> 
                           <li><p>miesięczna:</p><b>300zł</b></li>
                        </ul>
                    </span> 
                </article>
                
                <article className="description">
                    <h2>Opis</h2>
                    <ul>
                        <li>Plan treningowy na 4 tygodnie!</li>
                        <li>Treningi dopasowane do Twojego planu dnia!</li>
                        <li>Wskazówki żywieniowe!</li>
                        <li>Konsultacja online!</li>
                        <li>Nielimitowany kontakt!</li>
                        <li>Wsparcie i motywacja!</li>
                    </ul>
                </article>               
            </>   
        ) 
    }
}