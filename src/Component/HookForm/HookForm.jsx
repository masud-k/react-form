import useInputState from "../UseInput/useInput";


const HookForm = () => {

    // const [name, handleNameChange]= useInputState('Rahim');
    const emailState = useInputState('abc@gmail.com');


    const handleSubmit = e => {
        console.log('form data', emailState.value);
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name"/> <br /> */}
                <input {...emailState} type="email" name="email" /> <br />
                <input type="number" name="number" /> <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;