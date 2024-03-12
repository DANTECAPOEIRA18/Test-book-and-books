import {FC, useState} from 'react';
import OptionComponent from './labelRadio';

interface Options {
    label: string;
}

const RadioButtonBox: FC = () => {
    
    const [selectedOption, setSelectedOption] = useState<string>('');
    const handleOptionChange = (value: string) => {
        setSelectedOption(value);
    };

    const OptionsObject : Options[] = [
        {
            label: 'Opción 1',
        },
        {
            label: 'Opción 2',
        },
        {
            label: 'Opción 3',
        },
        {
            label: 'Opción 4',
        },
    ]
    
    return (
        <div className='radiobutton1' >
            <div className="radiobutton2">
                {
                    OptionsObject.map((opt,index)=>{
                        return (
                            <OptionComponent key={`id_value${index}`}id={`opt_${index}`} label={opt.label} handleOptionChange={handleOptionChange} selectedOption={selectedOption}/>
                        )
                    })
                }  
            </div>
  
            
        </div>
        
    );
};
  
export default RadioButtonBox;