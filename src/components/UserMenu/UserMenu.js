import { useDispatch, useSelector } from "react-redux"

import { authSelectors, authOperations } from "redux/auth";

export function UserMenu() {
    const name = useSelector(authSelectors.getName)

    const dispatch = useDispatch();

    const handleButtonClick = () => {
        console.log('HBC')
        dispatch(authOperations.logOut())
    }    
    return (
        <div>
            <img src='#' alt='user avatar'/>
            <p>Welcome {name}</p>
            <button
                type='button'
                onClick={handleButtonClick}
            >Sign Out</button>
        </div>
    )
}