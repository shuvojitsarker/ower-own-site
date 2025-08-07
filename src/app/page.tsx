"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import arrowRight from "../../public/assets/icons/arrow-right.svg";
import ourTeamBg from "../../public/assets/img/our-team/our-team__bg.png";
import startNowImg from "../../public/assets/img/stratnow-section/startnow-img.png";
import { Banner } from "./Component/HomePage/Banner";
import { Technologies } from "./Component/HomePage/Technologies";
import { HowItWorks } from "./Component/HomePage/HowItWorks";
import { Projects } from "./Component/HomePage/Projects";
import { FaqSection } from "./Component/HomePage/FaqSection";
import { ReviewSlider } from "./Component/HomePage/ReviewSlider";


export default function HomePage() {
  return (
    <main>
      {/* Hero/Main Section */}
      <Banner />

      {/* Technology Section */}
      <Technologies />

      {/* Commitments Section */}
      <section className="commitments">
        <div className="container">
          <div className="commitments-container">
            <div data-aos="zoom-in-right" className="commitments-numbers">
              <div className="commitments-top-numbers">
                <div className="commitments-top-number">
                  <strong className="commitments-number__strong">245%</strong>
                  <p className="commitments-number__p">More revenues for the brand</p>
                </div>
                <div className="commitments-top-number">
                  <strong className="commitments-number__strong">130K+</strong>
                  <p className="commitments-number__p">Audiences reached</p>
                </div>
              </div>
              <div className="commitments-down-numbers">
                <div className="commitments-down-number">
                  <strong className="commitments-number__strong">50+</strong>
                  <p className="commitments-number__p">Brands trust us</p>
                </div>
                <div className="commitments-down-number">
                  <strong className="commitments-number__strong">24+</strong>
                  <p className="commitments-number__p">Worldwide awards</p>
                </div>
              </div>
            </div>
            <div data-aos="zoom-in-left" className="commitments-info">
              <div className="commitments-info__heading">
                <h2 className="commitments-info__heading-txt">Commitments</h2>
                <p className="commitments-info__heading-info-txt">
                  We are committed to working with you collaboratively to
                  understand your goals and create a strategy that will achieve
                  them.
                </p>
              </div>
              <div className="commitments-info__btn">
                <Link className="commitments-info__btn-link" href="#">
                  Learn More
                  <Image className="commitments-info__btn-link-img" src={arrowRight} alt=""  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Projects Section */}
      <Projects />

      {/* Elevate Banner */}
      <section data-aos="zoom-in-right" className="elevate-banner">
        <div className="container">
          <div className="elevate-banner__container">
            <div className="elevate-banner__left">
              <h2 className="elevate-banner__left-head-txt">
                Elevate your brand Today!
              </h2>
            </div>
            <div className="elevate-banner__right">
              <div className="elevate-banner__right-info">
                <p className="elevate-banner__right-info">
                  Ready to transform your digital dresence? Let&apos;s create magic together! book our services now!
                </p>
              </div>
              <div className="elevate-banner__right-btn">
                <a className="elevate-banner__right-button" href="">Book Call</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="container">
          <div className="team-container">
            <div data-aos="fade-right" className="team-left">
              <Image
                src={ourTeamBg}
                alt=""
                className="team-left__img"
              />
            </div>
            <div data-aos="fade-left" className="team-right">
              <div className="team-right__heading">
                <h2 className="team-right__heading-h">Meet Our Team</h2>
                <p className="team-right__heading-p">
                  Discover the brilliance behind Embrace. Our team blends innovation and artistry to craft digital wonders that captivate
                </p>
              </div>
              <div data-aos="fade-left" className="team-right__btn">
                <a href="#!" className="team-right__button">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Slider */}
      <ReviewSlider />

      {/* Journey Banner */}
      <section data-aos="fade-right" className="journey-banner">
        <div className="container">
          <div className="journey-container">
            <div className="journey-bg">
              <div className="journey-container__left">
                <h1 className="journey-container__left-title">Start Your Journey With Us</h1>
                <div className="journey-container__left-btn">
                  <a className="journey-container__left-button" href="#!">Start now</a>
                </div>
              </div>
              <div className="journey-container__right">
                <Image src={startNowImg} alt="" className="journey-container__right-img"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help/FAQ Section */}
      <FaqSection />

    </main>
  );
}
