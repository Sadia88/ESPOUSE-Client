import React from 'react';
import img1 from '../../../assets/sliderImage/img1.jpg'
import img2 from '../../../assets/sliderImage/img2.jpg'
import img3 from '../../../assets/sliderImage/img3.jpg'
import SlideItems from './SlideItems';

const Slider = () => {
    const SliderData = [
        {
            image: img1,
            prev: 3,
            id: 1,
            next: 2
        },
        {
            image: img2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: img3,
            prev: 2,
            id: 3,
            next: 1
        },
        
    ]
    return (
        <div className="carousel w-full py-10">
            {
                SliderData.map(slide=><SlideItems key={slide.id} slide={slide}></SlideItems>)
            }
        </div>
    );
};

export default Slider;