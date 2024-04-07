import {FC, useState, useEffect} from 'react';
import OptionComponent from './labelRadio';
import { IPerson } from '../../store/interfaces';
import { LoadUsers } from '../../store/users/users.asyncActions';
import { useSelector, useDispatch } from 'react-redux';
import { setNewPerson } from '../../store/users/users.actions';


interface Options {
    label: string;
}

const RadioButtonBox: FC = () => {
    const dispatch = useDispatch();
    const people : IPerson[] = useSelector((state: any) => state.users.listPeople);
    const isLoading : boolean = useSelector((state: any) => state.users.isLoading);
    const [labels, setOptionList] = useState<Options[]>([]);
    const [selectedOption, setSelectedOption] = useState<string>('');
    const handleOptionChange = (value: string) => {
        const onePerson : IPerson = people.filter((value2) => value2.id === value)[0];
        setSelectedOption(value);
        dispatch(setNewPerson(onePerson));
    };
    
    useEffect(()=>{
        dispatch(LoadUsers(''))
    },[])

    useEffect(()=>{
        if(!isLoading){
            const newOptions : Options[] = people.map((person)=>{
                return {
                    label: person.id,
                    
                }
            })
            setOptionList(newOptions);
        }
    },[isLoading, people])
    
    
    return (
        <div className='radiobutton1' >
            <div className="radiobutton2">
                {
                    labels.map((opt,index)=>{
                        return (
                            <OptionComponent key={`id_value${index}`}id={`${opt.label}`} label={opt.label} handleOptionChange={handleOptionChange} selectedOption={selectedOption}/>
                        )
                    })
                }  
            </div>
  
            
        </div>
        
    );
};
  
export default RadioButtonBox;