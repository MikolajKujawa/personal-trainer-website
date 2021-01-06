import React from 'react';
import {Link} from 'react-router-dom';

import Offer from './Offer';
import Promotion from '../components/Promotion';

import '../styles/pages-styles/OfferPage.sass'

const OfferPage = ({match}) => {
    return ( 
        <div className="offerPage">
            <Link to="/oferta"><h1>Oferta</h1></Link>
            <Offer id={match.params.name}/>
            <Promotion/>
        </div>
     );
}
 
export default OfferPage;