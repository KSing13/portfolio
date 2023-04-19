import React from 'react';
import { Fragment } from "react";
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin, faTelegram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

let items = [{
                id: "gh",
                name: "GitHub",
                href: "#",
                icon: faGithub
            },
            {
                id: "ln",
                name: "LinkedIn",
                href: "#",
                icon: faLinkedin
            },
            {
                id: "tg",
                name: "Telegram",
                href: "#",
                icon: faTelegram
            },
            {
                id: "fb",
                name: "Facebook",
                href: "#",
                icon: faFacebook
            },
            {
                id: "ig",
                name: "Instagram",
                href: "#",
                icon: faInstagram
            },
            {
                id: "tt",
                name: "TikTok",
                href: "#",
                icon: faTiktok
            }];

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App>
            <Fragment>
                <h1>Contact Me</h1>
                <div className="dv-flex">
                    {items.map((item) => (
                        <div 
                            key={ item.id } 
                            className="dv-flex-content"
                        >
                            <a className="" href={ item.href }><FontAwesomeIcon icon={ item.icon } size="6x"/></a>
                        </div>
                    ))}
                </div>
            </Fragment>
        </App>
    </React.StrictMode>,
)