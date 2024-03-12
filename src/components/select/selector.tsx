import { FC } from "react";
import { IoIosArrowDown } from "react-icons/io";
import  { selectorHookData } from "./selector.Hook";


export interface option {
    label: string;
    value: number;
}

interface Props {
    options: option[]
}

const SelectorComponent : FC<Props> = ({options}) => {

    const {
        handleOptionChange,
        isOpen,
        selectedOptions,
        selectedOptionsString,
        toggleDropdown
    } = selectorHookData({
        options
    })

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