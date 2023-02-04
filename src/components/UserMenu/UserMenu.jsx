import { useDispatch, useSelector } from "react-redux"
import { logOut } from "redux/auth/authOperations";
import { selectUser } from "redux/auth/authSelectors"

export const UserMenu = () => {
    const { name } = useSelector(selectUser);
    const dispatch = useDispatch();

    return (
        <div>
            <p>Welcome, {name}</p>
            <button type="button" onClick={()=>dispatch(logOut())}>Logout</button>
     </div>
 )
}