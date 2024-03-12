import { FC } from "react";
import { TiMediaPlay } from "react-icons/ti";

interface Props {
    label: string;
    isHeader: boolean;
    type?: any;
    onClick?: () => void;
}
const ButtonComponent : FC<Props> = ({
    label,
    isHeader,
    type = 'button',
    onClick
}) => {
    
    return (
        <>
            <button type={type} onClick={onClick} className={`button-style ${isHeader ? 'header-button':'general-button'}`}>
                <div className="labels">
                    {label}
                </div>
                {
                    isHeader ? (
                        <div className="labels">
                            <TiMediaPlay className="icon-button"/>
                        </div>
                    ) : (
                        null
                    )
                }
                
            </button>
        </>
    )
}

export default ButtonComponent;