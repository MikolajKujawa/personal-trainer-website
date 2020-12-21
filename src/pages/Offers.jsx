import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/pages-styles/Offers.sass';

import początkujący_img from '../images/offer1.jpg';
import two_pearson from '../images/trening_we_dwóch.jpg';
import coaching_care from '../images/coaching.jpg';

const products = [
    {name:'Trening dla początkujących - Online', image:początkujący_img, price:'300zł'},
    {name:'Trening dla 2 osób - online', image:two_pearson, price:'500zł'},
    {name:'Opieka trenerska - online', image:coaching_care, price:'300zł'}
];

const Offer = () => {

    const list = products.map(product => (
        <li key={product.name}>
            <Link to={`/produkt/${product.name}`}>
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