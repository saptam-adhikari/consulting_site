import React from 'react'
import './programs.css'
import TemplatesHead from './TemplateHead';

const Programs = () => {
  return (
    <div className='programs'>
      <div className='program'>
            <div className='about'>
                <p>Hello! Thank you for visiting our products, we always put product quality and customer support first, if the product is right for you please buy a theme to enjoy the full range of quality features, Its amazing theme and customer support from Bravis-Themes. Thank you very much!</p>
            </div>

            <div className='ratings'>
                <div className='rating-img'>
                <img src='https://demo.bravisthemes.com/herrington/wp-content/uploads/2024/07/ld2.webp'></img>
                <div>
                <h5>Bravis-Themes</h5>
                <h5>Theme Creators on Themeforest</h5>
                </div>
                </div>
                <div className='rating-star'>
                    <h5>Author Rating</h5>
                    <img src='data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAABlklEQVRIibWVu0sDQRDGf3k0KQwaAiL4KH2BpTY+MYWohVZiYaWxtRXBXkELSx9/gIggKOgfEOwULSwsxQeiiApipYhMmITNsXfcxvODZW9nb/a7mfluNpZpbMURC8CGi0vckaAFWNf530jmgITOoeGSriRwCzQAj0Az8B11JONKgM6jYR1dSOY963zUJFLoEY9NImmKkkQKHbP4zoZxThrPoppaoM4YpbWfmvIqgjcd78azjB9UXUvAIlATMioXfAAriVQ6WwC+gJwlJX+BRLEMrJZqsgZMAp8REcg5E3puReEPgT7g/o8Ed0AvcFQyeNV1AXQD51USnAE9wKVptElY1NIPHDgS7AMD6l+BoN7VCVw5kLQD17aNoJ9xyIFAMOi3EUTi6+SDYVeSeJWRWP8zP5IuIGOxH6soTix7Wa1jaBJvqp6AKWAMKGgHnla7iZwLiZnfTaAN2PO8s6uK2g74uCJsEpZu/Ao8aJc99fkQE9IptoB6TVux+5YPTKXFVoEObdMzwE0IAoHc/Tt6dbwAz+Ud4Bdye0DMQZjLZwAAAABJRU5ErkJggg=='/>
                    <img src='data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAABlklEQVRIibWVu0sDQRDGf3k0KQwaAiL4KH2BpTY+MYWohVZiYaWxtRXBXkELSx9/gIggKOgfEOwULSwsxQeiiApipYhMmITNsXfcxvODZW9nb/a7mfluNpZpbMURC8CGi0vckaAFWNf530jmgITOoeGSriRwCzQAj0Az8B11JONKgM6jYR1dSOY963zUJFLoEY9NImmKkkQKHbP4zoZxThrPoppaoM4YpbWfmvIqgjcd78azjB9UXUvAIlATMioXfAAriVQ6WwC+gJwlJX+BRLEMrJZqsgZMAp8REcg5E3puReEPgT7g/o8Ed0AvcFQyeNV1AXQD51USnAE9wKVptElY1NIPHDgS7AMD6l+BoN7VCVw5kLQD17aNoJ9xyIFAMOi3EUTi6+SDYVeSeJWRWP8zP5IuIGOxH6soTix7Wa1jaBJvqp6AKWAMKGgHnla7iZwLiZnfTaAN2PO8s6uK2g74uCJsEpZu/Ao8aJc99fkQE9IptoB6TVux+5YPTKXFVoEObdMzwE0IAoHc/Tt6dbwAz+Ud4Bdye0DMQZjLZwAAAABJRU5ErkJggg=='/>
                    <img src='data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAABlklEQVRIibWVu0sDQRDGf3k0KQwaAiL4KH2BpTY+MYWohVZiYaWxtRXBXkELSx9/gIggKOgfEOwULSwsxQeiiApipYhMmITNsXfcxvODZW9nb/a7mfluNpZpbMURC8CGi0vckaAFWNf530jmgITOoeGSriRwCzQAj0Az8B11JONKgM6jYR1dSOY963zUJFLoEY9NImmKkkQKHbP4zoZxThrPoppaoM4YpbWfmvIqgjcd78azjB9UXUvAIlATMioXfAAriVQ6WwC+gJwlJX+BRLEMrJZqsgZMAp8REcg5E3puReEPgT7g/o8Ed0AvcFQyeNV1AXQD51USnAE9wKVptElY1NIPHDgS7AMD6l+BoN7VCVw5kLQD17aNoJ9xyIFAMOi3EUTi6+SDYVeSeJWRWP8zP5IuIGOxH6soTix7Wa1jaBJvqp6AKWAMKGgHnla7iZwLiZnfTaAN2PO8s6uK2g74uCJsEpZu/Ao8aJc99fkQE9IptoB6TVux+5YPTKXFVoEObdMzwE0IAoHc/Tt6dbwAz+Ud4Bdye0DMQZjLZwAAAABJRU5ErkJggg=='/>
                    <img src='data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAABlklEQVRIibWVu0sDQRDGf3k0KQwaAiL4KH2BpTY+MYWohVZiYaWxtRXBXkELSx9/gIggKOgfEOwULSwsxQeiiApipYhMmITNsXfcxvODZW9nb/a7mfluNpZpbMURC8CGi0vckaAFWNf530jmgITOoeGSriRwCzQAj0Az8B11JONKgM6jYR1dSOY963zUJFLoEY9NImmKkkQKHbP4zoZxThrPoppaoM4YpbWfmvIqgjcd78azjB9UXUvAIlATMioXfAAriVQ6WwC+gJwlJX+BRLEMrJZqsgZMAp8REcg5E3puReEPgT7g/o8Ed0AvcFQyeNV1AXQD51USnAE9wKVptElY1NIPHDgS7AMD6l+BoN7VCVw5kLQD17aNoJ9xyIFAMOi3EUTi6+SDYVeSeJWRWP8zP5IuIGOxH6soTix7Wa1jaBJvqp6AKWAMKGgHnla7iZwLiZnfTaAN2PO8s6uK2g74uCJsEpZu/Ao8aJc99fkQE9IptoB6TVux+5YPTKXFVoEObdMzwE0IAoHc/Tt6dbwAz+Ud4Bdye0DMQZjLZwAAAABJRU5ErkJggg=='/>
                    <img src='data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAABlklEQVRIibWVu0sDQRDGf3k0KQwaAiL4KH2BpTY+MYWohVZiYaWxtRXBXkELSx9/gIggKOgfEOwULSwsxQeiiApipYhMmITNsXfcxvODZW9nb/a7mfluNpZpbMURC8CGi0vckaAFWNf530jmgITOoeGSriRwCzQAj0Az8B11JONKgM6jYR1dSOY963zUJFLoEY9NImmKkkQKHbP4zoZxThrPoppaoM4YpbWfmvIqgjcd78azjB9UXUvAIlATMioXfAAriVQ6WwC+gJwlJX+BRLEMrJZqsgZMAp8REcg5E3puReEPgT7g/o8Ed0AvcFQyeNV1AXQD51USnAE9wKVptElY1NIPHDgS7AMD6l+BoN7VCVw5kLQD17aNoJ9xyIFAMOi3EUTi6+SDYVeSeJWRWP8zP5IuIGOxH6soTix7Wa1jaBJvqp6AKWAMKGgHnla7iZwLiZnfTaAN2PO8s6uK2g74uCJsEpZu/Ao8aJc99fkQE9IptoB6TVux+5YPTKXFVoEObdMzwE0IAoHc/Tt6dbwAz+Ud4Bdye0DMQZjLZwAAAABJRU5ErkJggg=='/>
                    <h5>
                    ( 148 ratings )</h5>

                </div>
            </div>

            <div className='service-offered'>
                <div className='services'>
                    <div className='sevice-content'>
                        <div className='service-image'> <img src='https://demo.bravisthemes.com/herrington/wp-content/uploads/2024/07/ld3.webp'/></div>
                        <hr/>
                        <h3>Fresh & Clean Design</h3>
                        <h5>The theme has been optimized to give your visitors a clear, glorious experience in terms of UX/UI.</h5>

                    </div>
                    <div className='sevice-content'>
                        <div className='service-image' > <img src='https://demo.bravisthemes.com/herrington/wp-content/uploads/2024/07/ld4.webp'/></div>
                        <hr/>
                        <h3>Lifetime Free Updates</h3>
                        <h5>When you purchase the theme, you will receive free lifetime updates of the theme forever after.</h5>
                        
                    </div>
                    <div className='sevice-content'>
                       
                        <div className='service-image'> <img src='https://demo.bravisthemes.com/herrington/wp-content/uploads/2024/07/ld5.webp'/></div>
                        <hr/>
                        <h3>Free Plugin</h3>
                        <h5>All the plugins included in your theme are free and you can enjoy all their features. It’s awesome!</h5>
                        
                    </div>
                    <div className='sevice-content'>
                        
                        <div  className='service-image'><img src='https://demo.bravisthemes.com/herrington/wp-content/uploads/2024/07/ld6.webp'/></div>
                        <hr/>
                        <h3>Multilingual Support</h3>
                        <h5>The translation is ready, so you just need to add the translation file. very easy to switch languages.</h5>
                        
                    </div>
                </div>

            </div>

      </div>

      <div id='demos'>
         <TemplatesHead/>
         <hr/>
        <div className='features'>
          <h3>One Click Installation</h3>
          <h3>No Coding Required</h3>
          <h3>Easy To Customize</h3>
        </div>
      </div>
    </div>
  );
};


export default Programs
