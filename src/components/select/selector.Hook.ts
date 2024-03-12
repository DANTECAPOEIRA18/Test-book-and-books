import { useEffect, useState } from 'react';

interface option {
    label: string;
    value: number;
}


interface Props {
    options: option[]
}

export const selectorHookData = ({options}:Props) => {

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
            selectedOptions.map((value: any)=>{
                dataString = `${dataString}${dataString === '' ? '' : ','}${options[value-1].label}`
            })
            setSelectedOptionsString(dataString);
        }
        else{
            setSelectedOptionsString('');
        }
    },[selectedOptions])

    return{
        isOpen,
        selectedOptions,
        selectedOptionsString,
        toggleDropdown,
        handleOptionChange
    }
}