// IMPORT //
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Giovanni Garlaschini</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex flex-row" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item px-3 link-underline-opacity-0">
                                <NavLink to="/">Homepage</NavLink>
                            </li>
                            <li className="nav-item px-3 link-underline-opacity-0">
                                <NavLink to="/About">Chi siamo</NavLink>
                            </li>
                            <li className="nav-item px-3 link-underline-opacity-0">
                                <NavLink to="/List">Post List</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default Navbar;  