import Link from 'next/link'
import Image from 'next/image'

export const Footer = () => {
    return (
        <footer>
            <section className="footer-expand">
                <div className="container">
                    <div className="footer-expand__container">
                        <div className="footer-epand__left">
                            <div className="header-logo">
                                <Link href="/" className="header-logo__link">
                                    <Image 
                                        src="/assets/img/logo.png" 
                                        alt="Axisium Logo" 
                                        width={40}
                                        height={40}
                                        priority
                                    />
                                    <div>
                                        <h2 style={{ margin: 0 }}>Axisium</h2>
                                        <h4 style={{ margin: 0 }}>Technology Solutions</h4>
                                    </div>
                                </Link>
                            </div>
                            <div className="footer-expand__left-socials">
                                <div className="footer-expand__left-social">
                                    <Link href="#!" className="footer-expand__left-social__link">
                                        <Image 
                                            src="/assets/icons/footer-section/instagram-icon.svg" 
                                            alt="Instagram" 
                                            width={24}
                                            height={24}
                                            className="footer-expand__left-social__img"
                                        />
                                    </Link>
                                </div>
                                <div className="footer-expand__left-social">
                                    <Link href="#!" className="footer-expand__left-social__link">
                                        <Image 
                                            src="/assets/icons/footer-section/twitter-icon.svg" 
                                            alt="Twitter" 
                                            width={24}
                                            height={24}
                                            className="footer-expand__left-social__img"
                                        />
                                    </Link>
                                </div>
                                <div className="footer-expand__left-social">
                                    <Link href="#!" className="footer-expand__left-social__link">
                                        <Image 
                                            src="/assets/icons/footer-section/facebook-icon.svg" 
                                            alt="Facebook" 
                                            width={24}
                                            height={24}
                                            className="footer-expand__left-social__img"
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="footer-expand__left-button">
                                <Link href="/contact" className="footer-expand__left-btn">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                        <div className="footer-expand__right">
                            <div className="footer-expand__right__column">
                                <ul className="footer-expand__right__column__ul">
                                    <li className="footer-expand__right__column__li">
                                        <Link href="/work-with-us" className="footer-expand__right__column__li-a">
                                            Work With Us
                                        </Link>
                                    </li>
                                    <li className="footer-expand__right__column__li">
                                        <Link href="/advertise" className="footer-expand__right__column__li-a">
                                            Advertise With Us
                                        </Link>
                                    </li>
                                    <li className="footer-expand__right__column__li">
                                        <Link href="/support" className="footer-expand__right__column__li-a">
                                            Support Us
                                        </Link>
                                    </li>
                                    <li className="footer-expand__right__column__li">
                                        <Link href="/business-advice" className="footer-expand__right__column__li-a">
                                            Business Advices
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-expand__right__column">
                                <ul className="footer-expand__right__column__ul">
                                    <li className="footer-expand__right__column__li">
                                        <Link href="/coaching" className="footer-expand__right__column__li-a">
                                            Private Coaching
                                        </Link>
                                    </li>
                                    <li className="footer-expand__right__column__li">
                                        <Link href="/work" className="footer-expand__right__column__li-a">
                                            Our Work
                                        </Link>
                                    </li>
                                    <li className="footer-expand__right__column__li">
                                        <Link href="/commitment" className="footer-expand__right__column__li-a">
                                            Our Commitment
                                        </Link>
                                    </li>
                                    <li className="footer-expand__right__column__li">
                                        <Link href="/team" className="footer-expand__right__column__li-a">
                                            Our Team
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="footer-expand__right__column">
                                <ul className="footer-expand__right__column__ul">
                                    <li className="footer-expand__right__column__li">
                                        <Link href="/about" className="footer-expand__right__column__li-a">
                                            About Us
                                        </Link>
                                    </li>
                                    <li className="footer-expand__right__column__li">
                                        <Link href="/faq" className="footer-expand__right__column__li-a">
                                            FAQs
                                        </Link>
                                    </li>
                                    <li className="footer-expand__right__column__li">
                                        <Link href="/report-bug" className="footer-expand__right__column__li-a">
                                            Report a Bug
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="footer-mini">
                <div className="container">
                    <div className="footer-mini__container">
                        <div className="footer-mini__left">
                            <p className="footer-mini__left__copyright">
                                © 2025 Axisium Technology Solutions. - All Rights Reserved
                            </p>
                        </div>
                        <div className="footer-mini__right">
                            <p className="footer-mini__right__set">
                                <Link href="/terms" className="footer-mini__right__set-a">
                                    Terms of use
                                </Link>
                            </p>
                            <p className="footer-mini__right__set">
                                <Link href="/privacy" className="footer-mini__right__set-a">
                                    Privacy policy
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
};