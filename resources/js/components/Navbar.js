
const Navbar = () => {
    return(
        <nav className="flex justify-between items-center px-[20px]">
            <a className="brand-link">Sanu's Nursery</a>
            <ul className="nav-list flex items-center">
                <li className="nav-item">
                    <a href="#" className="nav-link flex px-3 py-2">Home</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link flex px-3 py-2">Store</a>
                </li> 
                <li className="nav-item">
                    <a href="#" className="nav-link flex px-3 py-2">Contact</a>
                </li> 
                <li className="nav-item">
                    <a href="#" className="nav-link flex px-3 py-2">About</a>
                </li> 
                <li className="nav-item">
                    <a href="#" className="nav-link flex px-3 py-2">Login</a>
                </li> 
            </ul>
        </nav>
    )
}

export default Navbar;