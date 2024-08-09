import React from 'react'
import './Features.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset, faSyncAlt, faGlobe, faPalette, faSlidersH, faSearch, faTextHeight, faRocket } from "@fortawesome/free-solid-svg-icons";

const features = [
    { title: "Friendly Support", description: "Our aim is the satisfaction of customers. If you have any questions, or need help with Herrington, just contact us and our support.", icon: faHeadset },
  { title: "Lifetime Free Updates", description: "You will get free lifetime updates to the theme. Updates may include various theme improvements, bug fixes or theme issues.", icon: faSyncAlt },
  { title: "Multilingual Support", description: "Theme is translation ready so you just add a translation file and it works seamlessly, easy using Free Polylang plugin.", icon: faGlobe },
  { title: "Advanced Colors Board", description: "Feel free to rearrange the entire color palette, whether static or gradient colors, making your website unique and beautiful.", icon: faPalette },
  { title: "Theme Customizer", description: "Our theme customization theme allows you to customize theme elements instantly to your liking, which is great, isn’t it.", icon: faSlidersH },
  { title: "SEO Friendly", description: "Get more visitors by making your website content fully visible to search engines. Customers will know you better.", icon: faSearch },
  { title: "Font Management", description: "You customize the font style with Google Webfont, Typekit, Dafont, Myfont, or upload your own custom font file.", icon: faTextHeight },
  { title: "Major Browsers Support", description: "Theme supports all major browsers and will behave identically on Google Chrome, Mozilla Firefox, Safari, Opera and Edge.", icon: faSearch },
  { title: "High Speed Performance", description: "Herrington is using the best coding practices and top quality code to ensure fast loading times of the website.", icon: faRocket },
  ];

const Features = () => {
  return (
    <div>
      <div className='featurs-page'>
      <div className='features-info'>
          <h5>Level-up Your Website</h5>
          <h1>Top-Notch Features Included</h1>
          <h3> Functionality and Opportunities Brought by This Theme Make Your Website Building Process Fun and Simple.</h3>
        </div>
        <hr/>
      </div>
      <div className="features-grid">
      {features.map((feature, index) => (
        <div key={index} className="feature-item">
          <FontAwesomeIcon icon={feature.icon} size="2x" />
          <br/>
          <hr/>
          <br/>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
    </div>   
  )
}

export default Features
