import { FC } from "react";
import SelectorComponent from "../../components/select/selector";
import { option } from "../../components/select/selector";
import RadioButtonBox from "../../components/radioButton/radioButton";
import CardSlider from "../../templates/sliderCards/SliderCard";
import FormComponent from "../../templates/formComponent/FormComponent";


const LayoutBody: FC = () => { 
    const listItems : option[] = [
        {
            label: "Opción 1",
            value: 1
        },
        {
            label: "Opción 2",
            value: 2
        },
        {
            label: "Opción 3",
            value: 3
        },
        {
            label: "Opción 4",
            value: 4
        }
        
    ]
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