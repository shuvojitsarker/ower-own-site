import Image from 'next/image'
import plusSvg from "../../../../public/assets/icons/faq-section/plus.svg";
import arrowRight from "../../../../public/assets/icons/arrow-right.svg";

export const FaqSection = () => {
    return (
        <section className="help">
            <div className="container">
            <div className="help-container">
                <div data-aos="zoom-in-right" className="help-left">
                {[
                    "How do i sign up for the project?",
                    "What thing i should prepare before starting?",
                    "Does my company need help for marketing advices?"
                ].map((q, idx) => (
                    <div className={`help-left__model${idx === 2 ? " bb" : ""}`} key={q}>
                    <div className="help-left__model-question">
                        <p className="help-left__model-question__txt">{q}</p>
                    </div>
                    <div className="help-left__model-open">
                        <Image src={plusSvg} alt="" className="help-left__model-open__img"/>
                    </div>
                    </div>
                ))}
                </div>
                <div data-aos="zoom-in-left" className="help-right">
                <div className="help-right__heading">
                    <h2 className="help-right__heading-h">How we can help you?</h2>
                    <p className="help-right__heading-p">Follow our newsletter. We will regular update our latest project and availability.</p>
                </div>
                <div className="help-right__email">
                    <input type="email" className="help-right__email-input" placeholder="Enter Your Email" />
                    <a href="#!" className="help-right__email-button">Lets Talk</a>
                </div>
                <div className="help-right__more">
                    <a href="#!" className="help-right__more-link">
                    More FAQ
                    <Image src={arrowRight} alt="" className="help-right__more-img" />
                    </a>
                </div>
                </div>
            </div>
            </div>
        </section>
    );
};