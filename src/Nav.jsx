import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Nav() {
    const navigate = useNavigate();
    const location = useLocation();
    const token = localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    if (!token) return null;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary mb-4">
            <div className="container">
                <Link className="navbar-brand fw-bold text-primary" to="/home">
                    <i className="bi bi-building me-2"></i>SENATI ERP
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/home' ? 'active' : ''}`} to="/home">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/category' ? 'active' : ''}`} to="/category">Categorías</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/product' ? 'active' : ''}`} to="/product">Productos</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <button onClick={handleLogout} className="btn btn-outline-danger btn-sm">
                            Cerrar Sesión
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
