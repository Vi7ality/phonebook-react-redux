import { useDispatch } from "react-redux";
import { register } from "redux/auth/authOperations";


export const RegisterForm = () => {
  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    
    dispatch(register({
      name: name,
      email: email,
      password: password,
    }))
    form.reset();
  }


     return (
    <form  autoComplete="off" onSubmit={handleSubmit}>
      <label>
        Username
        <input type="text" name="name" required/>
      </label>
      <label>
        Email
        <input type="email" name="email" required/>
      </label>
      <label>
        Password
        <input type="password" name="password" required/>
      </label>
      <button type="submit">Register</button>
    </form>
  );
}