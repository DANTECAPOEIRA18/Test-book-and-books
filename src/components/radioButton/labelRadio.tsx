import { FC, ChangeEvent } from "react";


interface Props {
    label: string;
    id: string;
    handleOptionChange: (value : string) => void;
    selectedOption: string;
}

const OptionComponent: FC<Props> = ({label, id, handleOptionChange, selectedOption}) => {

    return(
        <div className="labelradio1">
            <label className="labelradio2">
                <input
                    type="radio"
                    value={id}
                    checked={selectedOption === id}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => handleOptionChange(event.target.value)}
                    className="inputradio"
                />
            </label>
            <p className="radio-text"  onClick={() => handleOptionChange(id)}>{label}</p>
        </div>

    )
}


export default OptionComponent