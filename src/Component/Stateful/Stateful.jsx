import { useState } from "react";


const Stateful = () => {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (password.length < 6){
            setError("Password must be at least 6 characters")
        }
        else {
            setError('')
        }
        console.log(name, email, password);

    }

    const handleName = e => {
        setName(e.target.value)
        console.log(e.target.value);
    }

    const handleEmail = e => {
        setEmail(e.target.value)
        console.log(email);

    }

    const handlePassword = e => {
        setPassword(e.target.value)
        console.log(password);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleName}
                    type="text" name="name" /> <br />
                <input
                    onChange={handleEmail}
                    type="email" name="email" /> <br />
                <input
                    onChange={handlePassword}
                    type="password" name="password" /> <br />
                <input type="submit" value="submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default Stateful;