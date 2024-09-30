import useInput from "../hooks/useInput";

const RegisterWithCustomHooks = () => {
    const email = useInput("");
    const password = useInput("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email.value, password.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Email"
                {...email} // Spread de props
            />
            <input
                type="password"
                placeholder="Password"
                {...password} // Spread de props
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default RegisterWithCustomHooks;
