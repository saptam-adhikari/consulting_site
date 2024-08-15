import React from 'react'
import './innerpages.css';
import Carousel from '../Carousel.js';
import InnerpageInfo from './InnerpageInfo.js';
import VisualInfo from './VisualInfo.js';
import ShopInfo from './ShopInfo.js';


const Innerpages = () => {
  return (
    <div id="innerpages">
      <div className='innerpage-secction'>
        <InnerpageInfo/>
        <div className='features-checklist'>
            <h3>✔  Edit Anything Visually</h3>
            <h3>✔ Design Elements Suitable for a Consulting Firm</h3>
            <h3>✔ Pro-Level Design Layouts</h3>
            <h3>✔ Flexible Customization Options</h3>
        </div>
      </div>
      <Carousel/>

      <div>
        <div className='build-visual'>
          <img src='https://demo.bravisthemes.com/herrington/wp-content/uploads/2024/07/ld15.webp'/>
          <VisualInfo/>
        </div>
      </div>
      <div>
        <div className='shop-pages'>
          <ShopInfo/>
          <img src='https://demo.bravisthemes.com/herrington/wp-content/uploads/2024/07/ld20.webp'/>
        </div>
      </div>

    
      <div className="box-container">
      <div className="box">
        <img className="box-image" src="https://demo.bravisthemes.com/herrington/wp-content/uploads/2024/07/ld23.webp" alt="One Click Demo Import"  />
        <div className="box-content">
          <h3>One Click Demo Import</h3>
          <p>One Click Installation. Select the demo and data type you<br/> want and click import. That’s it!</p>
        </div>
      </div>
      
      <div className="box">
        <img className="box-image" src="https://demo.bravisthemes.com/herrington/wp-content/uploads/2024/07/ld26.webp" alt="Bravis Charts & Pie Chart" />
        <div className="box-content">
          <h3>Bravis Charts & Pie Chart</h3>
          <p>You can easily chart your business's growth chart easily with<br/> bravis's charting system.</p>
        </div>
      </div>
     </div>

     <div className='superlook-section'>
        <div className='image-section'>
          <img src='https://demo.bravisthemes.com/herrington/wp-content/uploads/2024/07/ld27.webp' alt='bgimg'/>
        </div>
        <div className='section-content'>
             <h1>Super Look <br/> on Every Screen.</h1>
            <p>Automatically detects the screen size and adjust the <br/>content accordingly to provide fully responsive and <br/>optimised sites.</p>
            <br/>
            <br/>
            <hr/>
            <h3>✔ Media and Text are Optimized on All Screen Sizes</h3>
            <h3>✔ Response Displays Perfectly on Mobile</h3>
            <h3>✔ Ready for Retina Screens</h3>
        </div>
      </div>

      <div>
      <div className="blog-content">
        <div className="blog-features">
          <h5>Modern & Beautiful</h5>
          <h1>Amazing Blog Layout</h1>
          <p>
            Give your blog a unique touch with these minimalist blog and single post layouts.
            <br />
            Feel free to launch and run your blog, make it in a very professional way.
          </p>
        </div>
        <div className="blog-image">
          <img src="https://demo.bravisthemes.com/herrington/wp-content/uploads/2024/07/ld28.webp" alt="Newspaper" />
        </div>
      </div>
      

      <div className="blog-options">
        <div>
          <img src="https://demo.bravisthemes.com/herrington/wp-content/uploads/2024/07/ld29.webp" alt="Image Icon" />
          <h5>Image</h5>
        </div>
        <div>
          <img src="https://demo.bravisthemes.com/herrington/wp-content/uploads/2024/07/ld30.webp" alt="Video Icon" />
          <h5>Video</h5>
        </div>
        <div>
          <img src="https://demo.bravisthemes.com/herrington/wp-content/uploads/2024/07/ld31.webp" alt="SoundCloud Icon" />
          <h5>SoundCloud</h5>
        </div>
        <div>
          <img src="https://demo.bravisthemes.com/herrington/wp-content/uploads/2024/07/ld32.webp" alt="Quote Icon" />
          <h5>Quote</h5>
        </div>
        <div>
          <img src="https://demo.bravisthemes.com/herrington/wp-content/uploads/2024/07/ld33.webp" alt="Links Icon" />
          <h5>Links</h5>
        </div>
      </div>
    </div>
    <div className='service-pages'>
        <div className='service-section'>
          <img src='https://demo.bravisthemes.com/herrington/wp-content/uploads/2024/07/ld34.webp' alt='image'/>
          <p>blog right sidebar</p>
        </div>
        <div className='service-section'>
          <img src='https://demo.bravisthemes.com/herrington/wp-content/uploads/2024/07/ld35.webp'  alt='image'/>
          <p>blog full width</p>
        </div>
        <div className='service-section'>
          <img src='https://demo.bravisthemes.com/herrington/wp-content/uploads/2024/07/ld36.webp'  alt='image'/>
          <p>Blog Colums</p>
        </div>
        <div className='service-section'>
          <img src='https://demo.bravisthemes.com/herrington/wp-content/uploads/2024/07/ld37.webp'  alt='image'/>
          <p>blog single</p>
        </div>
      </div>

      <div  >
        <div className='plugins'>
          <div>
            <img src='https://demo.bravisthemes.com/herrington/wp-content/uploads/2024/07/ld44.webp'/>
          </div>
          <div>
            <div className='plugins-info'>
            <h5>Exclusive Plugins</h5>
            <h1>Premium and Exclusive Plugins.</h1>
            <p>Includes the most popular plugins, Seamless integration with Elementor, Slider Revolution,<br/>WooCommerce, Contact Form 7 and many more!
            </p>
          </div>
          <div className="plugins-sections">
             <div>
                <img src="https://demo.bravisthemes.com/herrington/wp-content/uploads/2024/07/ld40.webp" alt="Image Icon" />
                <h5>Slider Revolution</h5>
             </div>
             <div>
               <img src="https://demo.bravisthemes.com/herrington/wp-content/uploads/2024/07/ld41.webp" alt="Video Icon" />
               <h5>Mailchimp</h5>
             </div>
             <div>
               <img src="https://demo.bravisthemes.com/herrington/wp-content/uploads/2024/07/ld42.webp" alt="SoundCloud Icon" />
               <h5>Contact Form 7</h5>
             </div>
             <div>
               <img src="https://demo.bravisthemes.com/herrington/wp-content/uploads/2024/07/ld43.webp" alt="Quote Icon" />
               <h5>WooCommerce</h5>
             </div>
           </div>
           <br/>
           <br/>
           <hr/>
           <br/>
           <br/>
           <div>
            <div className='plugin-list'>
              <h5> Multilingual</h5>
              <h5> Bravis User</h5>
              <h5> Tidio Chat</h5>
              <h5> WPC Quick View</h5>
            </div>
            <div className='plugin-list'>
              <h5>Bravis Addons</h5>
              <h5> Elementor</h5>
              <h5> WPC Wishlis</h5>
              <h5> Variation Swatches</h5>
            </div>
           </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Innerpages
