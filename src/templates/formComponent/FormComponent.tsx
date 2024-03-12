import { FC, useState, ChangeEvent, FormEvent, useEffect } from "react";
import TextField from "../../components/textField/textField";
import TextArea from "../../components/textArea/textArea";
import ButtonComponent from "../../components/button/button";

const FormComponent : FC = () => {

    const [name, setName] = useState<string>('');
    // State for the email input
    const [email, setEmail] = useState<string>('');
    
    const [dataUser, setDataUser] = useState<string>('');

    useEffect(()=>{
        if(name === '' || email === ''){
            setDataUser('');
        }
    },[email, name])

    // Handle changes to the name input
    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        if(event.target.value !== name){
            setDataUser('');
        }
        setName(event.target.value);
    };

    // Handle changes to the email input
    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        if(event.target.value !== email){
            setDataUser('');
        }
        setEmail(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent the default form submit action
        setDataUser(`Form was submitted with Name: ${name} and Email: ${email}`)
        // Here you could also do something with the form data, like sending it to a server
    };

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