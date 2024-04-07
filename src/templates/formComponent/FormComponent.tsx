import { FC } from "react";
import TextField from "../../components/textField/textField";
import TextArea from "../../components/textArea/textArea";
import ButtonComponent from "../../components/button/button";
import { formHookData } from "./form.Hook";

const FormComponent : FC = () => {

    const {
        dataUser,
        email,
        handleEmailChange,
        handleNameChange,
        handleSubmit,
        name
    } = formHookData();
    

    return(
        <form onSubmit={handleSubmit}>
            <div>Name:</div>
            <div>
                <TextField type="text" handleInputChange={handleNameChange} inputText={name} required={true} label={''}></TextField>
            </div>
            <div>Email:</div>
            <div>
                <TextField type="email" handleInputChange={handleEmailChange} inputText={email} required={true} label={''}></TextField>
            </div>
            <div>
                <TextArea value={dataUser} label={''} placeholder={"Render the input text information here..."}></TextArea>
            </div>
            <div>
                <ButtonComponent type="submit" label="Submit" isHeader={false}/>
            </div>
        </form>
    )
}

export default FormComponent;