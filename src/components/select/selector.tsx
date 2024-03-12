import { FC, useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";


export interface option {
    label: string;
    value: number;
}

interface Props {
    options: option[]
}

const SelectorComponent : FC<Props> = ({options}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
    const [selectedOptionsString, setSelectedOptionsString] = useState<string>('');
  
    const toggleDropdown = () => setIsOpen(!isOpen);
  
    const handleOptionChange = (optionId: number) => {
        if (selectedOptions.includes(optionId)) {
            setSelectedOptions(selectedOptions.filter(id => id !== optionId));
        } else {
            setSelectedOptions([...selectedOptions, optionId]);
        }
    };

    useEffect(()=>{
        
        if(selectedOptions.length > 0){
            let dataString = '';
            selectedOptions.map((value)=>{
                dataString = `${dataString}${dataString === '' ? '' : ','}${options[value-1].label}`
            })
            setSelectedOptionsString(dataString);
        }
        else{
            setSelectedOptionsString('');
        }
    },[selectedOptions])
    return(
        <>
            <div>
                <div className="selector-field">
                    <input type="text" readOnly placeholder="Selector" value={selectedOptionsString} onClick={toggleDropdown} className="readonly-input selector-input" />
                    <button type="button" onClick={toggleDropdown} className="selector-button">    
                        <IoIosArrowDown className="selector-icon" />
                    </button>
                    
                </div>
                
                {isOpen && (
                    <div className="selector-options-div ">
                        {options.map(option => (
                            
                            <div key={option.value} className="selector-option-div2">
                                <label className="selector-option-label">
                                    <input
                                        type="checkbox"
                                        id={`option-${option.value}`}
                                        checked={selectedOptions.includes(option.value)}
                                        onChange={() => handleOptionChange(option.value)}
                                        className="selector-option-input"
                                    />
                                </label>
                                <p className="option-text" onClick={() => handleOptionChange(option.value)}>{option.label}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default SelectorComponent;