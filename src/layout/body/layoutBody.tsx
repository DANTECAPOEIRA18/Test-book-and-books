import { FC } from "react";
import SelectorComponent from "../../components/select/selector";
import RadioButtonBox from "../../components/radioButton/radioButton";
import CardSlider from "../../templates/sliderCards/SliderCard";
import FormComponent from "../../templates/formComponent/FormComponent";
import { listItems } from './interfaces';


const LayoutBody: FC = () => { 
    return(
        <>
            <div>
                <CardSlider />
            </div>
            <div className='body-selectors'>
                <div className="grid-item">
                    <div className='selector1'>
                        <SelectorComponent options={listItems}/>
                    </div>
                </div>
                <div className="grid-item">
                    <div className='selector2'>
                        <RadioButtonBox />
                    </div>
                </div>
                <div className="grid-item">
                    <div className='guest-info'>
                        <FormComponent />                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default LayoutBody