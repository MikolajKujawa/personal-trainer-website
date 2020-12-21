import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import AboutMePage from '../pages/AboutMePage';
import Contact from '../pages/Contact';
import Offers from '../pages/Offers';
import OfferPage from '../pages/OfferPage';
import ErrorPage from '../pages/ErrorPage';
import Blog from '../pages/Blog';

const Pages = () => {
    return ( 
        <>
            <Switch>
                <Route path="/" exact component = {HomePage} />
                <Route path="/omnie" component = {AboutMePage} />
                <Route path="/oferta" component = {Offers} />
                <Route path="/produkt/:name" component = {OfferPage} />
                <Route path="/blog" component = {Blog} />
                <Route path="/kontakt" component = {Contact} />
                <Route component = {ErrorPage} />
            </Switch>
        </>
    );
}
 
export default Pages;