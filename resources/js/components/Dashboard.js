
const Dashboard = () => {

    return (
        <div className="dashboard-container">
            <nav className="dash-nav flex justify-between">
                <a className="brand-link flex items-center pl-3">Sanu's Nursery</a>
                <ul className="dash-nav-list flex items-center">
                    <li className="list-item">
                        <a className="list-link flex px-3 py-2">Products</a>
                    </li>
                    <li className="list-item">
                        <a className="list-link flex px-3 py-2">Users</a>
                    </li>
                    <li className="list-item">
                        <a className="list-link flex px-3 py-2">Orders</a>
                    </li>
                    <li className="list-item">
                        <a className="list-link flex px-3 py-2">Admin</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Dashboard;