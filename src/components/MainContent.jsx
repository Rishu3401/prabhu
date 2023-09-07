import React from 'react';
import './MainContent.css';
function MainContent() {
  return (
    <main className="main-content">
      <section className="mission-section">
  <div className="mission-text">
    <h1>
      Our mission is to develop and operate cutting edge space technology to
      support life on planets or in space.
    </h1>
    <button className="launch-button">Launch</button>
  </div>
  
</section>

      <section id="about" className="about-section">
        <h2>Who Are We?</h2>
        <p>
          "Space Philic" means denoting an affinity or inclination towards
          space. It's a community of space technology loving people from various
          age group. All we want is to explore the unexplored.
        </p>
      </section>
      <section className="image-section"></section>
      <section id="products" className="products-section">
        <h2>Products</h2>
        <p>Explore our innovative aerospace products</p>
      </section>
   
        <div className='container'>
            <div className='column1'>
             
            </div>
            <div className='column2'>
        <div className="product-box1">
          Bi-Propellant Semi-Cryogenic Liquid Rocket Engine
        </div>
        <div className="product-box2">Electric Pump Feed System</div>
        <div className="product-box3">Green Propellant</div>
        <div className="product-box4">1.6 O/F Ratio</div>
        </div>
        </div>


      <h3>Rupak Launch Vehicle Demonstrator</h3>
      <section className="rupakL">
        <div className="product-1">Green Propellant</div>
        <div className="product-2">Reusable</div>
        <div className="product-3">VTVL</div>
      </section>
      <h3>Rupak FS</h3>
      <section className="rupakFS">
        <div className="prod-1">250 Kg Payload Size</div>
        <div className="prod-2">Reusable</div>
        <div className="prod-3">Mobile Launch</div>
        <div className="prod-3">800 Km LEO</div>
      </section>
      <div className='teamdetail'>
        <div className='ourteam'><h2>Our Team</h2></div>
        <div className='coreteam'><h4>Core Team</h4></div>
        <div className='team'></div>
      </div>
      <div className='advisor1'>
     
        <div className='advisor'></div>
        </div>
      <section className="vision"></section>
      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>Feel free to get in touch with us.</p>
        <form>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Message"
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  )
}

export default MainContent;