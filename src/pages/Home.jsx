import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn, selectUser } from "redux/auth/authSelectors";

const Home = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const {name} = useSelector(selectUser)
    return (
        <div>
            <h1>
                Welcome to Phonebook App
            </h1>
            {isLoggedIn ? (<h2>{name}</h2>) : (<h2>Please <NavLink to={'/register'}>register</NavLink> or <NavLink to={'/login'}>login</NavLink> if you already have an account.</h2>
        )}
         </div>   
    )
}

export default Home