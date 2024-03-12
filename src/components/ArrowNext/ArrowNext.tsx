import { TiMediaPlay } from "react-icons/ti";
import { FC } from "react";

interface ArrowProps {
    className?: string;
    onClick?: () => void;
  }
  
const NextArrow: FC<ArrowProps> = ({ className, onClick }) => (
    <div className={className} onClick={onClick} style={{ right: '30px', zIndex: '25' }}>
        <button className="arrow-button">
            <TiMediaPlay className="icon-slider"/>
        </button>
    </div>
);

export default NextArrow