import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">UseContext</a>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <NavLink className={ (args) => `nav-link ${args.isActive ? 'active' : ''}` } to={'/'}>Home</NavLink>
                            <NavLink className={ (args) => `nav-link ${args.isActive ? 'active' : ''}` } to={'/about'}>About</NavLink>
                            <NavLink className={ (args) => `nav-link ${args.isActive ? 'active' : ''}` } to={'/login'}>Login</NavLink>

                            {/* args se define así : {isActive: false, isPending: fals} */}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
