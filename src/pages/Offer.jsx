import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/pages-styles/Offer.sass';

import początkujący_img from '../images/offer1.jpg';
import two_person from '../images/trening_we_dwóch.jpg';
import coaching_care from '../images/coaching.jpg';

const products = [
    {name:'Trening dla początkujących - Online', image:początkujący_img, price:'300zł'},
    {name:'Trening dla 2 osób - online', image:two_person, price:'500zł'},
    {name:'Opieka trenerska - online', image:coaching_care, price:'300zł'}
];

const Offer = () => {

    const list = products.map(product => (
        <li key={product.name}>
            <Link to={`/oferta/${product.name}`}>
                <img src={product.image} alt={product.name}></img>
                <h3>{product.name}</h3>
                <h4>Cena: <span>{product.price}</span></h4>
                <button>więcej</button>
            </Link>
        </li>
    ))

    return ( 
        <div className="offer">
            <h1>OFERTA</h1> 
            <ul>
                {list}
            </ul>                     
        </div>
     );
}
 
export default Offer;

{/* <section>
<h2>Trening dla początkujących - <u>Online</u></h2>
<ul>
    <li>Potrzebujesz telefonu, internetu, kawałka podłogi i wygodnego ubrania!</li>
    <li>Trening z własną masą ciała</li>
    <li>Bez sprzętu</li>
    <li>Bez wychodzenia z domu</li>
    <li>Nie tracisz czasu na dojazd</li>
    <li>Nie musisz mieć karnetu na siłownię</li>
</ul>
<h3>OFERTA</h3>
<div>
    <img src={arrow} alt='first-arrow'/>
    <img src={arrow} alt='second-arrow'/>
    <img src={arrow} alt='third-arrow'/>
</div>                
<div className='offer'>
    <span>
        <h2>jednorazowa</h2>
        <h3>40zł/h</h3>
    </span>
    <span>
        <h2>miesięczna</h2>
        <h3>300zł</h3>
    </span>
    <span>
        <h2>3-miesięczna</h2>
        <h3>850zł</h3>
    </span>
</div>
</section>
<section>
<h2>Trening dla 2 osób - <u>Online</u></h2>
<ul>
    <li>Dla Ciebie i Twojej bratniej duszy!</li>
    <li>Wzajemna motywacja</li>
    <li>Trening uwzględnia Wasze umiejętności<br/>(Oboje dacie radę!)</li>
    <li>Nielimitowany kontakt</li>
</ul>
<h3>OFERTA</h3>
<div>
    <img src={arrow} alt='first-arrow'/>
    <img src={arrow} alt='second-arrow'/>
    <img src={arrow} alt='third-arrow'/>
</div>                
<div className='offer'>
    <span>
        <h2>jednorazowa</h2>
        <h3>60zł/h</h3>
    </span>
    <span>
        <h2>miesięczna</h2>
        <h3>500zł</h3>
    </span>
    <span>
        <h2>3-miesięczna</h2>
        <h3>1200zł</h3>
    </span>
</div>
</section>
<section>
<h2>Opieka trenerska Online - 300zł</h2>
<h2>OFERTA MIESIĘCZNA</h2>
<ul>
    <li>Plan treningowy na 4 tygodnie</li>
    <li>Treningi dopasowane do Twojego planu dnia</li>
    <li>Wskazówki żywieniowe</li>
    <li>Konsultacja online</li>
    <li>Nielimitowany kontakt</li>
    <li><strong>Wsparcie i motywacja</strong></li>
</ul>
</section> */}