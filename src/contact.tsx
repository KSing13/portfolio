import React from 'react';
import { Fragment } from "react";
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab);

let items = [{
                id: "gh",
                name: "GitHub",
                url: "#",
                icon: "github"
            },
            {
                id: "wa",
                name: "WhatsApp",
                url: "#",
                icon: "whatsapp"
            },
            {
                id: "fb",
                name: "Facebook",
                url: "#",
                icon: "facebook"
            },
            {
                id: "ig",
                name: "Instagram",
                url: "#",
                icon: "instagram"
            },
            {
                id: "tt",
                name: "TikTok",
                url: "#",
                icon: "tiktok"
            }];

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App idActive="contact">
            <Fragment>
                <h1>Contact Me</h1>
                <div>
                    <ul className="lg-flex">
                        {items.map((item) => (
                            <li 
                                key={ item.id } 
                                className="list-group-item lg-i-custom-1"
                            >
                                <a className="" href={ item.url }><FontAwesomeIcon icon={['fab', item.icon]} size="6x"/></a>
                            </li>
                        ))}
                    </ul>
                </div>
            </Fragment>
        </App>
    </React.StrictMode>,
)