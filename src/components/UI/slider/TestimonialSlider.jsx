import React from 'react';
import Slider from "react-slick";
import ava01 from '../../../assets/images/ava-1.jpg';
import ava02 from '../../../assets/images/ava-2.jpg';
import ava03 from '../../../assets/images/ava-3.jpg';
import '../../../styles/slider.css';

const TestimonialSlider = () => {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1500,
        autoplaySpeed: 8000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider className='overflow-hidden' {...settings}>
            <div>
                <p className="review_text">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, asperiores aut delectus corrupti laudantium omnis voluptatum eligendi id velit voluptates doloribus maiores eos culpa, nihil minima atque animi maxime nesciunt?"</p>
                <div className='slider_content d-flex align-items-center gap-3'>
                    <img src={ava01} alt="client" />
                    <h6>Jhon Doe</h6>
                </div>
            </div>
            
            <div>
                <p className="review_text">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, asperiores aut delectus corrupti laudantium omnis voluptatum eligendi id velit voluptates doloribus maiores eos culpa, nihil minima atque animi maxime nesciunt?"</p>
                <div className='slider_content d-flex align-items-center gap-3'>
                    <img src={ava02} alt="client" />
                    <h6>Sara Doe</h6>
                </div>
            </div>
            
            <div>
                <p className="review_text">"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, asperiores aut delectus corrupti laudantium omnis voluptatum eligendi id velit voluptates doloribus maiores eos culpa, nihil minima atque animi maxime nesciunt?"</p>
                <div className='slider_content d-flex align-items-center gap-3'>
                    <img src={ava03} alt="client" />
                    <h6>Adam Doe</h6>
                </div>
            </div>
        </Slider>
    )
}

export default TestimonialSlider;