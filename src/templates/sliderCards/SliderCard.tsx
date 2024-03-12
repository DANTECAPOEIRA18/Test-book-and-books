import { FC } from 'react';
import Slider from 'react-slick';
import CardComponent from '../../components/card/card';
import NextArrow from '../../components/ArrowNext/ArrowNext';
import PrevArrow from '../../components/ArrowPrev/ArrowPrev';

interface cardsProps {
    title: string;
    image: string; 
}

const CardSlider : FC = () => {

    const cards : cardsProps[] = [
        {
            image: 'https://img.freepik.com/foto-gratis/cintura-arriba-retrato-hombre-guapo-afeitar-serio-mantiene-manos-juntas-vestido-camisa-azul-oscuro-ha-hablado-interlocutor-parado-contra-pared-blanca-freelancer-hombre-seguro-si-mismo_273609-16320.jpg?t=st=1710122089~exp=1710122689~hmac=86856c760f248f5e6419d030227e02fb627084128ae43a58d7e22472deaff36b',
            title: 'Titulo 1'
        },
        {
            image: 'https://img.freepik.com/foto-gratis/estilo-vida-belleza-moda-concepto-emociones-personas-gerente-oficina-mujer-asiatica-joven-ceo-expresion-complacida-pie-sobre-fondo-blanco-sonriendo-brazos-cruzados-sobre-pecho_1258-59329.jpg?t=st=1710122089~exp=1710122689~hmac=44c082b1d772e3008419dfce8e156427e8a0c6a6d00775670372320ada7f976c',
            title: 'Titulo 2'
        },
        {
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Titulo 3'
        },
        {
            image: 'https://img.freepik.com/foto-gratis/apuesto-joven-brazos-cruzados-sobre-fondo-blanco_23-2148222620.jpg?w=740&t=st=1710122228~exp=1710122828~hmac=cb8ede1e62fbd17296885545fc5f870d3cb248d2c63e71a0201dc2470a86da3b',
            title: 'Titulo 4'
        },
        {
            image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Titulo 5'
        },
    ]
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
            // Add more breakpoints and settings as needed
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