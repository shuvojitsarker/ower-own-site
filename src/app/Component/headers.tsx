"use client";

import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css' // Import AOS CSS
import { Navigation } from './navigation';

export const Headers = () => {

    useEffect(() => {
        AOS.init({
        // Optional configuration options
        duration: 1000, // Animation duration in milliseconds
        once: false, // Whether animation should only happen once
        });
    }, []);
    return (
        <header style={{borderBottom: '1px solid rgba(0, 0, 0, .1)'}}>
            <div className="container">
                <div className="header-container">
                    <div data-aos="fade-right" className="header-logo">
                        <Link href="/" className="header-logo__link">
                            <Image 
                                src="/assets/img/logo.png" 
                                alt="Axisium Logo" 
                                width={40}
                                height={40}
                                priority
                            />
                            <div>
                                <h2 style={{ margin: 0, color: '#1F6FED' }}>Axisium</h2>
                                <h4 style={{ margin: 0, color: '#A871FA', fontWeight: 'bolder' }}>Technology Solutions</h4>
                            </div>
                        </Link>
                    </div>
                    <Navigation />
                    <div data-aos="fade-left" className="header-call">
                        <Link href="/book-call" className="header-call_btn">
                            Book A Call
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};