import { Fragment, useState } from "react";
import Button from '../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
    setActive: string;
    onClose: () => void;
}

let items = [{
                id: "home",
                name: "Home",
                url: "main.html"
            },
            {
                id: "contact",
                name: "Contact",
                url: "contact.html"
            }];

const Menu = ( {setActive, onClose} : Props ) => {
    return (
        <nav className="navbar navbar-expand-lg bg-custom">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <div className="collapse navbar-collapse" id="navbarContent">
                    <div className="navbar-nav">
                        <ul className="list-group">
                            {items.map((item, index) => (
                                <li key={ item.id } className="list-group-item">
                                    <a className={ "nav-link " + setActive } href={ item.url }>{ item.name }</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle Navigation Bar" onClick={ onClose }>
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    )
}

export default Menu;