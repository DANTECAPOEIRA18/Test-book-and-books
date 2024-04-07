import { FC, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from 'react-slick';
import CardComponent from '../../components/card/card';
import NextArrow from '../../components/ArrowNext/ArrowNext';
import PrevArrow from '../../components/ArrowPrev/ArrowPrev';
import { cardsProps } from './interfaces';
import { IPerson } from '../../store/interfaces';
import { LoadUsers } from '../../store/users/users.asyncActions';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';



const CardSlider : FC = () => {
    const dispatch = useDispatch();
    const people : IPerson[] = useSelector((state: any) => state.users.listPeople);
    const isLoading : boolean = useSelector((state: any) => state.users.isLoading);
    const[cardsList, setCardList] = useState<cardsProps[]>([]);

    useEffect(()=>{
        dispatch(LoadUsers(''))
    },[])

    useEffect(()=>{
        if(!isLoading){
            const newCards : cardsProps[] = people.map((person)=>{
                return {
                    title: person.title,
                    image: person.picture
                }
            })
            setCardList(newCards);
        }
    },[isLoading, people])



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
            {
                isLoading ? (
                    <Box sx={{ display: 'flex' }}>
                        <CircularProgress />
                    </Box>
                )
                    :
                    (
                        <Slider {...settings}>
                            {cardsList.map((card, index) => (
                                <div key={index}>
                                    <CardComponent image={card.image} title={card.title}/>
                                </div>
                            ))}
                        </Slider>
                    )
            }

        </div>

    );
};

export default CardSlider;