import React from 'react';
import '../styles/pages-styles/AboutMePage.css';

import AMPimage from '../images/AMPimage.png';
import AMPimage2 from '../images/AMPimage2.jpg';

const AboutMePage = () => {
    return ( 
        <div className="AboutMePage">
            <h1>O mnie...</h1>
            <section className="first">
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
            </section>

            <h1>Doświadczenie</h1>
            <section className="twice">
                <article>
                    <span>
                        Jestem certyfikowanym trenerem personalnym oraz instruktorem siłowni. Odbyłam kursy treningu
                        TRX, treningu POWER BAND i MINI BAND, kształtowania kobiecych pośladów, treningu KETTLEBELL,
                        rolowania, stretchingu statycznego i dynamicznego oraz szkolenie dotyczące zdrowego żywienia,
                        dietetyki i dietetyki sportowej.
                        Dlaczego jestem skuteczna?
                        Bo skupiam się na Tobie!
                        W pracę wkładam całe serce- jest to moja
                        największa pasja i nigdy nie czuję się źle w pracy!
                    </span>
                    <h2>Warto mi zaufać!</h2>
                </article>                
                <img src={AMPimage2} alt="AMPimage2"/>
            </section>
        </div>
     );
}
 
export default AboutMePage;