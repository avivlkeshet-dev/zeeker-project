import React from 'react';
import Frontpage from '../assets/Frontpage.png';

function ImgDisplay() {
    return (
        <div className="img-container">
            <img src={Frontpage} alt="Frontpage" className="frontpage-image" />
        </div>
    );
}

export default ImgDisplay;