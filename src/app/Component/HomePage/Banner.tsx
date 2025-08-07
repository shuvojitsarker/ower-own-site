
import Image from 'next/image'
import mainImage from "../../../../public/assets/img/main-section/main-img.png";

export const Banner = () => {
    return (
        <section className="main">
            <div className="container">
                <div className="main-container">
                    <div data-aos="fade-right" className="main-left">
                        <div className="main-left__info">
                            <h1 className="main-left__info-heading-txt">
                            We Take Care Of Your Brand
                            </h1>
                            <p className="main-left__info-desc">
                            We care about our work and we care about our clients.
                            </p>
                        </div>
                        <div className="main-left__sign-in">
                            <div className="main-left__sign-in__enter">
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="main-left__sign-in__enter-input"
                            />
                            </div>
                            <div className="main-left__sign-in__action">
                                <button className="main-left__sign-in__action-btn">
                                    Lets Talk
                                </button>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="main-right">
                        <div className="main-right__image">
                            <Image
                            src={mainImage}
                            alt=""
                            className="main-right__img"
                            
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};