import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <header className="header">
            <NavLink to="/" className="w-40 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
                <p className="blue-gradient_text">GAVIEEEN</p>
            </NavLink>
            <nav className="flex text-lg gap-7 font-medium">
                <NavLink to="/about" className={({ isActive }) => isActive ? 'blue-gradient_text ' : 'text-black text-outline-white'}>
                    About
                </NavLink>
                <NavLink to="/projects" className={({ isActive }) => isActive ? 'blue-gradient_text' : 'text-black text-outline-white'}>
                    Projects
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'blue-gradient_text' : 'text-black text-outline-white'}>
                    Contact
                </NavLink>
                <NavLink to="/credits" className={({ isActive }) => isActive ? 'blue-gradient_text' : 'text-black text-outline-white'}>
                    Credits
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar