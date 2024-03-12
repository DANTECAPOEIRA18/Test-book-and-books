import { FC } from 'react';

interface TextAreaProps {
    label: string;
    placeholder: string;
    value: string;
  }
  
const TextArea: FC<TextAreaProps> = ({
    label,
    placeholder,
    value,
}) => {

    return (
        <div className='area-div'>
            <label htmlFor="textAreaInput">{label}</label>
            <textarea
                id="textAreaInput"
                value={value}
                placeholder={placeholder}
                disabled
                className='area-text'
                required={false}
            />
            
            
        </div>
    );
};
  
export default TextArea;