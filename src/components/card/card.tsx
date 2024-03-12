import { FC } from "react";

interface Props {
    title: string;
    image: string;
}

const CardComponent: FC<Props> = ({image, title}) => {
    const cardStyle = image ?  { backgroundImage: `url(${image})` } : { backgroundColor: '#f0f0f0' }
    return(
        <>
            <div className="cardgen">
                <div className="photocard" style={cardStyle}></div>
                <div className="titlecard">
                    <p>{title}</p>
                </div>
                <div className="textcard">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc eget lorem dolor sed viverra ipsum. Id aliquet risus feugiat in ante metus dictum at. Imperdiet massa tincidunt nunc pulvinar sapien et ligula. Integer vitae justo eget magna fermentum iaculis eu non.</p>
                </div>
            </div>
        </>
    )
}

export default CardComponent