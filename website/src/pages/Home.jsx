import React from 'react';
import image1 from '../components/images/arrow-left.png';
import image2 from '../components/images/arrow-right.png';
import image3 from '../components/images/preset1.png';
import image4 from '../components/images/preset2.jpg';
import image5 from '../components/images/preset3.jpg';
import image6 from '../components/images/preset5.jpg';
import image7 from '../components/images/preset4.jpg';
import image9 from '../components/images/preset6.jpg';
import image8 from '../components/images/preset7.jpg';

import background from '../components/images/background.jpeg';

const Dogs = () =>{
  return (
    
<div >
  <div id="pictureslider" style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', height:"650px", }}>
  <title>Slider</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous" />
  <link rel="stylesheet" type="text/css" href="style.css" />
  <div id="content-wrapper">
    <div className="column">
      <img id="featured"  src={image7} />
      
      <div id="slide-wrapper">
        <img id="slideLeft" className="arrow" src={image1} />
        <div id="slider">
          <img className="thumbnail active" src={image7} />
          <img className="thumbnail" src={image8} />
          <img className="thumbnail" src={image9} />
          <img className="thumbnail" src={image3} />
          <img className="thumbnail" src={image4} />
          <img className="thumbnail" src={image6} />
          <img className="thumbnail" src={image5} />
        </div>
        <img id="slideRight" className="arrow" src={image2} />
      </div>
    </div>
    <div className="column">
      <h1>Awesome RV's</h1>
      <hr />
      <h3>$278,175</h3>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
     
      <a className="btn btn-dark" href="#">Buy Now!!!</a>

     
    </div>
  </div>

 </div>
</div>


  );
  

 
}
export default Dogs;