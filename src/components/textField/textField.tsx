import { FC, ChangeEvent} from "react";

interface TextFieldProps {
    label: string;
    required: boolean;
    inputText: string;
    type: string;
    handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  }
  
const TextField: FC<TextFieldProps> = ({ label, required, inputText, handleInputChange,type }) => {
  
    return (
        <div style={{marginTop: 3, marginBottom: 3}}>
            <label htmlFor="textInput">{label} </label>
            <input
                type={type}
                id="textInput"
                value={inputText}
                onChange={handleInputChange}
                className="text-field-round"
                required={required}
            />
        
        </div>
    );
};
  
export default TextField;