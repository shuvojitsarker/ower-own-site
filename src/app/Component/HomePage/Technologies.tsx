
import Image from 'next/image'
import { title } from 'process';

export const Technologies = () => {
    return (
        <section className="companies">
            <div className="container">
            <div className="companies-container">
                <div data-aos="fade-down" className="companies-heading">
                <h2 className="companies-heading-text">Technologies We Work With</h2>
                </div>
                <div data-aos="fade-right" className="companies-logos_top">
                {[
                    { href: "https://www.python.org/", src: "/assets/img/companies-section/row-1/python.png",title: "Python" },
                    { href: "https://laravel.com/", src: "/assets/img/companies-section/row-1/laravel.png", title: "Laravel" },
                    { href: "https://nodejs.org/en", src: "/assets/img/companies-section/row-1/nodejs.png", title: "Node.js" },
                    { href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", src: "/assets/img/companies-section/row-1/javascript.png", title: "JavaScript" },
                    { href: "https://www.php.net/", src: "/assets/img/companies-section/row-1/php.png", title: "PHP" },
                ].map((company, idx) => (
                    <div className="company-logo" key={idx}>
                    <a href={company.href} className="company-logo__link" target="_blank" rel="noopener noreferrer">
                        <Image src={company.src} alt={company.title} width={140} height={48} />
                    </a>
                    </div>
                ))}
                </div>
                <div data-aos="fade-left" className="companies-logos_down">
                {[
                    { href: "https://react.dev/", src: "/assets/img/companies-section/row-2/react.png", title: "React" },
                    { href: "https://angular.dev/", src: "/assets/img/companies-section/row-2/angular.png", title: "Angular" },
                    { href: "https://aws.amazon.com/", src: "/assets/img/companies-section/row-2/aws.png", title: "AWS" },
                    { href: "https://nextjs.org/", src: "/assets/img/companies-section/row-2/nextjs.png", title: "Next.js" },
                    { href: "https://cloud.google.com/", src: "/assets/img/companies-section/row-2/googlecloud.png", title: "Google Cloud" },
                ].map((company, idx) => (
                    <div className="company-logo" key={idx}>
                    <a href={company.href} className="company-logo__link" target="_blank" rel="noopener noreferrer">
                        <Image src={company.src} alt={company.title} width={140} height={48} />
                    </a>
                    </div>
                ))}
                </div>
            </div>
            </div>
        </section>
    );
};