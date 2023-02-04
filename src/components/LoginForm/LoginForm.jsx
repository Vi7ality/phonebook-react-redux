import { useDispatch } from "react-redux"
import { logIn } from "redux/auth/authOperations";

export const LoginForm = () => {
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
        const password = form.elements.password.value;
        dispatch(logIn({email: email, password: password}))

    }
    return (
        <form autoComplete="off" onSubmit={handleSubmit}>
            <label>
                Email
                <input type="email" name="email" required/>
            </label>
            <label>
                Password
                <input type="password" name="password" required/>
            </label>
            <button type="submit">Login</button>
        </form>
    )
}