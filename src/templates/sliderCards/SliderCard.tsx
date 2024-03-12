import { FC } from 'react';
import Slider from 'react-slick';
import CardComponent from '../../components/card/card';
import NextArrow from '../../components/ArrowNext/ArrowNext';
import PrevArrow from '../../components/ArrowPrev/ArrowPrev';
import { cards } from './interfaces';



const CardSlider : FC = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        nextArrow: <NextArrow className='arrow243' />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
        ],
    };

    return (
        <div className='box-slider'>
            <Slider {...settings}>
                {cards.map((card, index) => (
                    <div key={index}>
                        <CardComponent image={card.image} title={card.title}/>
                    </div>
                ))}
            </Slider>
        </div>

    );
};

export default CardSlider;