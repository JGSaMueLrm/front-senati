export default function Category() {
    return (
        <div className="container-fluid py-4 px-5">
            <div className="row mb-4 align-items-center">
                <div className="col-md-8">
                    <h1 className="fw-bold mb-1" style={{ color: "#2c3e50" }}>Categorías</h1>
                    <p className="text-muted mb-0">Gestión del catálogo de categorías.</p>
                </div>
            </div>

            <div className="card shadow-sm border-0">
                <div className="card-header bg-transparent py-3 d-flex justify-content-between align-items-center" style={{ borderBottom: "1px solid #d1dce5" }}>
                    <h5 className="mb-0 fw-bold" style={{ color: "#2c3e50" }}>Listado de Categorías</h5>
                    <button className="btn btn-primary btn-sm fw-bold px-3">
                        <i className="bi bi-plus-lg me-2"></i> Nueva Categoría
                    </button>
                </div>
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                            <thead style={{ backgroundColor: "#f5f7fa" }}>
                                <tr>
                                    <th scope="col" className="ps-4 py-3 text-uppercase small fw-bold" style={{ color: "#5a6c7d" }}>ID</th>
                                    <th scope="col" className="py-3 text-uppercase small fw-bold" style={{ color: "#5a6c7d" }}>Nombre</th>
                                    <th scope="col" className="py-3 text-uppercase small fw-bold" style={{ color: "#5a6c7d" }}>Descripción</th>
                                    <th scope="col" className="py-3 text-uppercase small fw-bold" style={{ color: "#5a6c7d" }}>Estado</th>
                                    <th scope="col" className="pe-4 py-3 text-end text-uppercase small fw-bold" style={{ color: "#5a6c7d" }}>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="ps-4 fw-bold text-muted">#001</td>
                                    <td className="fw-bold" style={{ color: "#2c3e50" }}>Electrónica</td>
                                    <td className="text-muted">Dispositivos electrónicos y gadgets</td>
                                    <td><span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 rounded-pill px-3">Activo</span></td>
                                    <td className="pe-4 text-end">
                                        <button className="btn btn-sm btn-outline-primary me-2"><i className="bi bi-pencil"></i></button>
                                        <button className="btn btn-sm btn-outline-danger"><i className="bi bi-trash"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="ps-4 fw-bold text-muted">#002</td>
                                    <td className="fw-bold" style={{ color: "#2c3e50" }}>Ropa</td>
                                    <td className="text-muted">Indumentaria para todas las edades</td>
                                    <td><span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 rounded-pill px-3">Activo</span></td>
                                    <td className="pe-4 text-end">
                                        <button className="btn btn-sm btn-outline-primary me-2"><i className="bi bi-pencil"></i></button>
                                        <button className="btn btn-sm btn-outline-danger"><i className="bi bi-trash"></i></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="ps-4 fw-bold text-muted">#003</td>
                                    <td className="fw-bold" style={{ color: "#2c3e50" }}>Hogar</td>
                                    <td className="text-muted">Artículos para el hogar y decoración</td>
                                    <td><span className="badge bg-warning bg-opacity-10 text-warning border border-warning border-opacity-25 rounded-pill px-3">Inactivo</span></td>
                                    <td className="pe-4 text-end">
                                        <button className="btn btn-sm btn-outline-primary me-2"><i className="bi bi-pencil"></i></button>
                                        <button className="btn btn-sm btn-outline-danger"><i className="bi bi-trash"></i></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="card-footer bg-transparent py-3" style={{ borderTop: "1px solid #d1dce5" }}>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-end mb-0 pagination-sm">
                            <li className="page-item disabled">
                                <a className="page-link" href="#" style={{ backgroundColor: "transparent", borderColor: "#d1dce5", color: "#8899a6" }}>Anterior</a>
                            </li>
                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#" style={{ backgroundColor: "transparent", borderColor: "#d1dce5", color: "#5a6c7d" }}>2</a></li>
                            <li className="page-item"><a className="page-link" href="#" style={{ backgroundColor: "transparent", borderColor: "#d1dce5", color: "#5a6c7d" }}>3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#" style={{ backgroundColor: "transparent", borderColor: "#d1dce5", color: "#5a6c7d" }}>Siguiente</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}
