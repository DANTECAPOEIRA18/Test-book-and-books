import { TiMediaPlayReverse } from "react-icons/ti";
import { FC } from "react";

interface ArrowProps {
    className?: string;
    onClick?: () => void;
  }
  
const PrevArrow: FC<ArrowProps> = ({ className, onClick }) => (
    <div className={className} onClick={onClick} style={{left:"0",zIndex: '25' }}>
        <button className="arrow-button">
            <TiMediaPlayReverse className="icon-slider"/>
        </button>
    </div>
);


export default PrevArrow;