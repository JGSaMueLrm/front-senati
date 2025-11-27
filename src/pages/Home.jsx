import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="container-fluid py-4 px-5">
            <div className="row mb-5 align-items-center">
                <div className="col-md-8">
                    <h1 className="fw-bold mb-1" style={{ color: "#2c3e50" }}>Home</h1>
                    <p className="text-muted mb-0">Resumen general de la actividad del sistema.</p>
                </div>
                <div className="col-md-4 text-md-end mt-3 mt-md-0">
                    <span className="badge p-2" style={{ backgroundColor: "white", color: "#5a6c7d", border: "1px solid #d1dce5" }}>
                        <i className="bi bi-calendar3 me-2"></i> {new Date().toLocaleDateString()}
                    </span>
                </div>
            </div>

            <div className="row g-4 mb-5">
                <div className="col-md-4">
                    <div className="card h-100 border-0 shadow-sm bg-gradient-dark">
                        <div className="card-body p-4">
                            <div className="d-flex justify-content-between align-items-start mb-3">
                                <div>
                                    <h6 className="text-uppercase fw-bold small mb-1" style={{ color: "#5a6c7d" }}>Productos</h6>
                                    <h2 className="display-5 fw-bold mb-0" style={{ color: "#2c3e50" }}>1,240</h2>
                                </div>
                                <div className="p-3 rounded-circle" style={{ backgroundColor: "#e3f2fd" }}>
                                    <i className="bi bi-box-seam fs-4" style={{ color: "#0066cc" }}></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center text-success small">
                                <i className="bi bi-arrow-up-short fs-5"></i>
                                <span className="fw-bold me-1">12%</span>
                                <span className="text-muted">vs mes anterior</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body p-4">
                            <div className="d-flex justify-content-between align-items-start mb-3">
                                <div>
                                    <h6 className="text-uppercase text-muted fw-bold small mb-1">Ventas Hoy</h6>
                                    <h2 className="display-5 fw-bold text-white mb-0">S/ 4.5k</h2>
                                </div>
                                <div className="bg-success bg-opacity-10 p-3 rounded-circle">
                                    <i className="bi bi-currency-dollar text-success fs-4"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center text-success small">
                                <i className="bi bi-arrow-up-short fs-5"></i>
                                <span className="fw-bold me-1">5%</span>
                                <span className="text-muted">vs ayer</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 border-0 shadow-sm">
                        <div className="card-body p-4">
                            <div className="d-flex justify-content-between align-items-start mb-3">
                                <div>
                                    <h6 className="text-uppercase text-muted fw-bold small mb-1">Stock Crítico</h6>
                                    <h2 className="display-5 fw-bold text-white mb-0">15</h2>
                                </div>
                                <div className="bg-warning bg-opacity-10 p-3 rounded-circle">
                                    <i className="bi bi-exclamation-triangle text-warning fs-4"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center text-danger small">
                                <i className="bi bi-arrow-down-short fs-5"></i>
                                <span className="fw-bold me-1">3</span>
                                <span className="text-muted">nuevos ítems</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row g-4">
                <div className="col-lg-8">
                    <div className="card h-100 border-0 shadow-sm">
                        <div className="card-header bg-transparent border-bottom border-secondary py-3">
                            <h5 className="mb-0 text-white fw-bold">Actividad Reciente</h5>
                        </div>
                        <div className="card-body p-0">
                            <div className="list-group list-group-flush">
                                <div className="list-group-item bg-transparent border-secondary py-3 px-4">
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <div className="bg-primary bg-opacity-10 p-2 rounded me-3">
                                                <i className="bi bi-plus-lg text-primary"></i>
                                            </div>
                                            <div>
                                                <h6 className="mb-0 text-white">Nuevo producto registrado</h6>
                                                <small className="text-muted">Laptop HP Pavilion 15"</small>
                                            </div>
                                        </div>
                                        <small className="text-muted">Hace 1h</small>
                                    </div>
                                </div>
                                <div className="list-group-item bg-transparent border-secondary py-3 px-4">
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <div className="bg-success bg-opacity-10 p-2 rounded me-3">
                                                <i className="bi bi-cart-check text-success"></i>
                                            </div>
                                            <div>
                                                <h6 className="mb-0 text-white">Venta completada #10234</h6>
                                                <small className="text-muted">Cliente: Juan Pérez</small>
                                            </div>
                                        </div>
                                        <small className="text-muted">Hace 2h</small>
                                    </div>
                                </div>
                                <div className="list-group-item bg-transparent border-secondary py-3 px-4">
                                    <div className="d-flex w-100 justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <div className="bg-info bg-opacity-10 p-2 rounded me-3">
                                                <i className="bi bi-arrow-repeat text-info"></i>
                                            </div>
                                            <div>
                                                <h6 className="mb-0 text-white">Actualización de stock</h6>
                                                <small className="text-muted">Monitor Dell 24" (+50 un.)</small>
                                            </div>
                                        </div>
                                        <small className="text-muted">Hace 4h</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card h-100 border-0 shadow-sm">
                        <div className="card-header bg-transparent border-bottom border-secondary py-3">
                            <h5 className="mb-0 text-white fw-bold">Accesos Rápidos</h5>
                        </div>
                        <div className="card-body p-4">
                            <div className="d-grid gap-3">
                                <button className="btn btn-primary btn-lg text-start" onClick={() => navigate('/product')}>
                                    <i className="bi bi-plus-circle me-2"></i> Nuevo Producto
                                </button>
                                <button className="btn btn-outline-light btn-lg text-start" onClick={() => navigate('/category')}>
                                    <i className="bi bi-tags me-2"></i> Gestionar Categorías
                                </button>
                                <button className="btn btn-outline-light btn-lg text-start">
                                    <i className="bi bi-people me-2"></i> Usuarios
                                </button>
                                <button className="btn btn-outline-light btn-lg text-start">
                                    <i className="bi bi-gear me-2"></i> Configuración
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
