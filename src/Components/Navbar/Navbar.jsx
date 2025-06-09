import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="flex justify-between text-3xl px-8 py-3 border-b-1">
            <div>
                <NavLink to="/">Home</NavLink>
            </div>
            <div className="space-x-5">
                <NavLink to="/about">About</NavLink>
                <NavLink to="/props">Props</NavLink>
                <NavLink to="/login">Login</NavLink>
            </div>
            
        </nav>
    );
};

export default Navbar;