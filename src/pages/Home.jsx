import { Phonebook } from "components/Phonebook/Phonebook";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/authSelectors";

export const Home = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    return (
        <div>
            {isLoggedIn ? (<Phonebook/>) : (<h1>
                Welcome to Phonebook App
            </h1>
        )}
         </div>   
    )
}