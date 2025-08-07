"use client";

import Link from 'next/link'

export const Navigation = () => {

    return (
        
        <nav data-aos="fade-down" className="header-nav">
            <ul className="header-nav__items">
                <li className="header-nav__item">
                    <Link className="header-nav__itemlink" href="/how-it-works">
                        How it Works
                    </Link>
                </li>
                <li className="header-nav__item">
                    <Link className="header-nav__itemlink" href="/work">
                        Our Work
                    </Link>
                </li>
                <li className="header-nav__item">
                    <Link className="header-nav__itemlink" href="/pricing">
                        Pricing
                    </Link>
                </li>
                <li className="header-nav__item mr0">
                    <Link className="header-nav__itemlink" href="/about">
                        About Us
                    </Link>
                </li>
            </ul>
        </nav>
    );
};