import { AuthNav } from "components/AuthNav/AuthNav";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { selectIsLoggedIn } from "redux/auth/authSelectors"

export const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <header>
            <NavLink to={'/'}>Home</NavLink>
            {isLoggedIn && <NavLink to={'/phonebook'}>Phonebook</NavLink>}
            {isLoggedIn ? (<UserMenu></UserMenu>) : (<AuthNav></AuthNav>)}
        </header>


    )
}