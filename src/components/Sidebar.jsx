import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Sidebar() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    const menuItems = [
        { path: "/home", icon: "bi-speedometer2", label: "Dashboard" },
        { path: "/category", icon: "bi-tags", label: "Categorías" },
        { path: "/product", icon: "bi-box-seam", label: "Productos" },
    ];

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3" style={{ width: "280px", minHeight: "100vh", backgroundColor: "#2c3e50", borderRight: "1px solid #34495e" }}>
            {/* Brand */}
            <div className="mb-4 pb-3 border-bottom" style={{ borderColor: "#34495e" }}>
                <Link to="/home" className="d-flex align-items-center text-decoration-none">
                    <div className="bg-primary bg-opacity-10 p-2 rounded me-3" style={{ backgroundColor: "rgba(0, 102, 204, 0.15)" }}>
                        <i className="bi bi-building text-white fs-4" style={{ color: "#4a90e2" }}></i>
                    </div>
                    <div>
                        <h5 className="mb-0 text-white fw-bold">SENATI ERP</h5>
                        <small style={{ color: "#95a5a6" }}>Sistema de Gestión</small>
                    </div>
                </Link>
            </div>

            {/* Navigation */}
            <ul className="nav nav-pills flex-column mb-auto">
                {menuItems.map((item) => (
                    <li className="nav-item mb-1" key={item.path}>
                        <Link
                            to={item.path}
                            className={`nav-link d-flex align-items-center ${location.pathname === item.path
                                    ? "active"
                                    : ""
                                }`}
                            style={location.pathname === item.path ? {} : { color: "#cbd5e1" }}
                        >
                            <i className={`bi ${item.icon} me-3 fs-5`}></i>
                            <span className="fw-semibold">{item.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>

            {/* User Section */}
            <div className="border-top pt-3" style={{ borderColor: "#34495e" }}>
                <div className="d-flex align-items-center mb-3 px-2">
                    <div className="rounded-circle p-2 me-3" style={{ width: "40px", height: "40px", backgroundColor: "#34495e" }}>
                        <i className="bi bi-person-fill text-white fs-5"></i>
                    </div>
                    <div className="flex-grow-1">
                        <h6 className="mb-0 text-white small">Administrador</h6>
                        <small style={{ color: "#95a5a6" }}>admin@senati.pe</small>
                    </div>
                </div>
                <button
                    onClick={handleLogout}
                    className="btn btn-outline-danger w-100 btn-sm"
                >
                    <i className="bi bi-box-arrow-right me-2"></i>
                    Cerrar Sesión
                </button>
            </div>
        </div>
    );
}
