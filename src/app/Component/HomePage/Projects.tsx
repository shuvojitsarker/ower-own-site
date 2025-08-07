import Image from 'next/image'

export const Projects = () => {
    return (
        <section className="projects">
            <div className="container">
            <div className="projects-container">
                <div className="projects-heading">
                <h2 data-aos="flip-left" className="projects-heading-h">Our Work</h2>
                <p data-aos="flip-right" className="projects-heading-p">
                    A glimpse of our portfolio
                </p>
                </div>
                <div className="projects-works">
                {[
                    { img: "/assets/img/our-work/apple-work.png", name: "Apple" },
                    { img: "/assets/img/our-work/coca-cola-work.png", name: "Coca-Cola" },
                    { img: "/assets/img/our-work/nike-work.png", name: "Nike" },
                ].map((project, idx) => (
                    <div data-aos="flip-up" className="project-work" key={idx}>
                    <Image src={project.img} alt={project.name} width={400} height={324} className="project-work__img" />
                    <p className="project-work__name">{project.name}</p>
                    </div>
                ))}
                </div>
                <div data-aos="flip-down" className="projects-btn">
                <a href="#!" className="project-btn__see-more">See More</a>
                </div>
            </div>
            </div>
        </section>
    );
};