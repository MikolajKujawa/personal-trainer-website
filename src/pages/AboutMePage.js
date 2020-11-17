import React from 'react';
import AMPimage from '../images/AMPimage.png';

import '../styles/pages-styles/AboutMePage.css';

const AboutMePage = () => {
    return ( 
        <div className="AboutMePage">
            <h1>O mnie...</h1>
            <header>
                <img src={AMPimage} alt='AMPimage'/>
                <article>
                    <h1>Julia Gamelska</h1>
                    <span>Jestem młodym trenerem stawiającym na WIEDZĘ!
                    <br/>
                    <strong>TRENUJ MĄDRZE, NIE CIĘŻKO!</strong> - to moje powiedzenie
                    <br/>
                    Nie mogę patrzeć na osoby = trenerów, którzy nie przykładają się do obowiązków, na
                    treningu więcej skupia się na swoim smartfonie czy rozmowie ze znajomym (którego akurat spotkali
                    na siłowni)</span>
                    <br/>
                    <h2>Kształcę się, szkole dla <u>CIEBIE!</u></h2>
                </article>
            </header>

            {/* 
            <h3>Jestem certyfikowanym trenerem personalnym oraz instruktorem siłowni. Odbyłam kursy treningu
            TRX, treningu POWER BAND i MINI BAND, kształtowania kobiecych pośladów, treningu KETTLEBELL,
            rolowania, stretchingu statycznego i dynamicznego oraz szkolenie dotyczące zdrowego żywienia,
            dietetyki i dietetyki sportowej.</h3>
            <h3>Dlaczego jestem skuteczna?</h3>
            <h2>Bo skupiam się na Tobie!</h2> 
            <h3>W pracę wkładam całe serce- jest to moja
            największa pasja i nigdy nie czuję się źle w pracy!</h3> 
            <h2>Warto mi zaufać!</h2> */}
        </div>
     );
}
 
export default AboutMePage;