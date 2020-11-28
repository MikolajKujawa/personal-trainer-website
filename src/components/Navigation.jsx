import React from 'react';
import '../styles/components-styles/Navigation.sass';
import {NavLink} from 'react-router-dom';

const list = [
    {name: 'Strona Główna', path: "/"},
    {name: 'O mnie', path: "/omnie"},
    {name: 'Oferta', path: "/oferta"},
    {name: 'Blog', path: "/blog"},
    {name: 'Kontakt', path: "/kontakt"},
]

const Navigation = () => {
    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path}>{item.name}</NavLink>
        </li>
    ))
    return ( 
        <nav className='navigation'>
            <ul>
                {menu}
            </ul>
        </nav>
     );
}
 
export default Navigation;