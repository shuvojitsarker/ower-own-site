import Image from 'next/image'
import bgImg from "../../../../public/assets/img/how-it-works-section/bg-img.png";

export const HowItWorks = () => {
    return (
        <section className="howworks">
            <div className="container">
                <div className="howworks-container">
                <div data-aos="zoom-in-down" className="howworks-left">
                    <div className="howworks-left__heading">
                    <h2 className="howworks-left__heading-text">How It Works</h2>
                    <p className="howworks-left__heading-p">
                        We believe that the best way to create successful marketing campaigns is to work closely with our clients to understand their goals and challenges.
                    </p>
                    </div>
                    <div className="howworks-left__img">
                    <Image src={bgImg} alt="" />
                    </div>
                </div>
                <div data-aos="zoom-out-down" className="howworks-right">
                    <div className="howworks-right-ways">
                    {[
                        {
                        icon: "/assets/icons/how-it-works-section/discovery-icon.svg",
                        title: "Discovery",
                        desc: "We meet with you to learn about your business, your goals, and your target audience.",
                        },
                        {
                        icon: "/assets/icons/how-it-works-section/strategy-icon.svg",
                        title: "Strategy",
                        desc: "We develop a customized marketing strategy that is based on your unique needs and goals.",
                        },
                        {
                        icon: "/assets/icons/how-it-works-section/execution-icon.svg",
                        title: "Execution",
                        desc: "We execute our strategy using the latest digital marketing tools and techniques.",
                        },
                        {
                        icon: "/assets/icons/how-it-works-section/measurement-icon.svg",
                        title: "Measurement",
                        desc: "We track the results of our campaigns so that we can make adjustments as needed.",
                        },
                    ].map((item, idx) => (
                        <div className="howworks-right__way" key={idx}>
                        <div className="howworks-right__way-icon">
                            <Image src={item.icon} alt="" width={48} height={48} />
                        </div>
                        <div className="howworks-right__way-info">
                            <h1 className="howworks-right__way-info-h">{item.title}</h1>
                            <p className="howworks-right__way-info-p">{item.desc}</p>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
                </div>
            </div>
            </section>
    );
};