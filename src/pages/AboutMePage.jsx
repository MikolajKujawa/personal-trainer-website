import React from 'react';
import '../styles/pages-styles/AboutMePage.css';

import AMPimage from '../images/AMPimage.png';
import AMPimage2 from '../images/AMPimage2.jpg';
import food from '../images/jedzenie treningowe.jpg';
import AMPimage3 from '../images/AMPimage3.jpg';

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
            
            <h1>Nowy styl</h1>
            <section className="third">
                <img src={food} alt="food"/>
                <article>
                    <span>
                        <h3>Udowodnię Ci, że możesz wszystko! Na nic nie jest za późno!</h3>                        
                        Pomogę ci zmienić twoje nawyki żywieniowe oraz styl życia, co przełoży się na twoje <strong>ZDROWIE, SAMOPOCZUCIE, KONFORT DNIA CODZIENNEGO!</strong> Udowodnię, że ruch ma wpływ na całe Twoje życie.             
                    </span>
                    <h3>Jestem wymagającym trenerem - każdy trening to w 100 % dobrze wykorzystany czas DLA CIEBIE!</h3>
                </article>
            </section>
            
            <h1>Zyski</h1>
            <section className="fourth">
               
                <article>
                    <span>
                        <h4>Będąc pod moją opieką zyskasz:</h4>
                        <ul>               
                            <li>- profesjonalną opiekę trenerską</li>
                            <li>- darmowe wskazówki żywieniowe</li>
                            <li>- porady 24H na dobę mailowo czy telefonicznie</li>
                            <li>-bezpłatną konsultację (na siłowni, w penerze czy telefonicznie) przed pierwszym treningiem!</li>
                            <li>- zyskasz nową energię do życia, czerpiąc przyjemność z ruchu!</li>
                        </ul>  
                        <h2>GWARANTUJĘ CI ZADOWOLENIE!</h2>                 
                    </span>
                </article>
                <img src={AMPimage3} alt="AMPimage3"/>
            </section>
            
            <section className="ending">
                <h1>NAPISZ, ZADZWOŃ!<br/> Czekam na Ciebie!</h1>
            </section>
            
        </div>
     );
}
 
export default AboutMePage;