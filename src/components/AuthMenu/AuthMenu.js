const { NavLink } = require("react-router-dom");


export function AuthMenu() {
    return (
        <>
        <NavLink to="/">Contacts</NavLink>
        <NavLink to="/signin">Sign In</NavLink>
        <NavLink to="/login">Log In</NavLink>
        </>
    )
}
