// import React from 'react';
import './Testonomials.css';
/* eslint-disable react/prop-types */

const Testimonials = () => {
  return (
    <section className="section-testimonials" id="testimonials">
      <div className="testimonials-container">
        <span className="subheading">Testimonials</span>
        <h2 className="heading-secondary">Once you try it, you cannot go back</h2>

        <div className="testimonials">
          <figure className="testimonial">
            <img
              className="testimonial-img"
              alt="Photo of customer Dave Bryson"
              src="img/customers/dave.jpg"
            />
            <blockquote className="testimonial-text">
              Inexpensive, healthy, and great-tasting meals, without even
              having to order manually! It feels truly magical.
            </blockquote>
            <p className="testimonial-name">&mdash; Dave Bryson</p>
          </figure>

          <figure className="testimonial">
            <img
              className="testimonial-img"
              alt="Photo of customer Ben Hadley"
              src="img/customers/ben.jpg"
            />
            <blockquote className="testimonial-text">
              The AI algorithm is crazy good, it chooses the right meals for
              me every time. It is amazing not to worry about food anymore!
            </blockquote>
            <p className="testimonial-name">&mdash; Ben Hadley</p>
          </figure>

          <figure className="testimonial">
            <img
              className="testimonial-img"
              alt="Photo of customer Steve Miller"
              src="img/customers/steve.jpg"
            />
            <blockquote className="testimonial-text">
              Omnifood is a lifesaver! I just started a company, so there is
              no time for cooking. I could not live without my daily meals now!
            </blockquote>
            <p className="testimonial-name">&mdash; Steve Miller</p>
          </figure>

          <figure className="testimonial">
            <img
              className="testimonial-img"
              alt="Photo of customer Hannah Smith"
              src="img/customers/hannah.jpg"
            />
            <blockquote className="testimonial-text">
              I got Omnifood for the whole family, and it frees up so much
              time! Plus, everything is organic and vegan and without plastic.
            </blockquote>
            <p className="testimonial-name">&mdash; Hannah Smith</p>
          </figure>
        </div>
      </div>

      <div className="gallery">
        {Array.from({ length: 12 }).map((_, i) => (
          <figure key={i} className="gallery-item">
            <img
              src={`img/gallery/gallery-${i + 1}.jpg`}
              alt="Photo of beautifully arranged food"
            />
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
