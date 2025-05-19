import "./NavBar.css"

function NavBar() {
    return (
        <>

        <nav className="navbar">
            <div>
                <img src="" alt="logo" />
            </div>

            <ul className="navbar-links">
                <li className="navbar-item"><a href="#">Home</a></li>
                <li className="navbar-item"><a href="#">Remeras</a></li>
                <li className="navbar-item"><a href="#">Pantalones</a></li>
            </ul>
        </nav>

        </>
    )
}

export default NavBar