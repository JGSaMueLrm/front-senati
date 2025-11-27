export default function Product() {
    return (
        <div className="container-fluid py-4 px-5">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                            <h1 className="fw-bold text-white mb-1">Nuevo Producto</h1>
                            <p className="text-muted mb-0">Complete la información para registrar un nuevo producto.</p>
                        </div>
                        <button className="btn btn-outline-secondary">
                            <i className="bi bi-x-lg me-2"></i> Cancelar
                        </button>
                    </div>

                    <div className="card shadow-sm border-0">
                        <div className="card-header bg-transparent border-bottom border-secondary py-3">
                            <h5 className="mb-0 text-primary fw-bold">Información General</h5>
                        </div>
                        <div className="card-body p-4">
                            <form>
                                <div className="row g-4 mb-4">
                                    <div className="col-md-6">
                                        <label htmlFor="nombre" className="form-label text-secondary small text-uppercase fw-bold">Nombre del Producto</label>
                                        <input type="text" className="form-control form-control-lg" id="nombre" placeholder="Ej: Laptop HP Pavilion" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="categoria" className="form-label text-secondary small text-uppercase fw-bold">Categoría</label>
                                        <select className="form-select form-select-lg" id="categoria">
                                            <option selected>Seleccionar...</option>
                                            <option value="1">Electrónica</option>
                                            <option value="2">Ropa</option>
                                            <option value="3">Hogar</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="marca" className="form-label text-secondary small text-uppercase fw-bold">Marca</label>
                                        <input type="text" className="form-control form-control-lg" id="marca" placeholder="Ej: HP" />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="modelo" className="form-label text-secondary small text-uppercase fw-bold">Modelo</label>
                                        <input type="text" className="form-control form-control-lg" id="modelo" placeholder="Ej: 15-dw3000" />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="descripcion" className="form-label text-secondary small text-uppercase fw-bold">Descripción Detallada</label>
                                        <textarea className="form-control form-control-lg" id="descripcion" rows="4" placeholder="Ingrese una descripción detallada del producto..."></textarea>
                                    </div>
                                </div>

                                <h5 className="mb-4 text-primary fw-bold border-bottom border-secondary pb-2">Precios e Inventario</h5>

                                <div className="row g-4 mb-4">
                                    <div className="col-md-3">
                                        <label htmlFor="precio_compra" className="form-label text-secondary small text-uppercase fw-bold">Precio Compra</label>
                                        <div className="input-group input-group-lg">
                                            <span className="input-group-text bg-dark border-secondary text-muted">S/</span>
                                            <input type="number" step="0.01" className="form-control" id="precio_compra" placeholder="0.00" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="precio_venta" className="form-label text-secondary small text-uppercase fw-bold">Precio Venta</label>
                                        <div className="input-group input-group-lg">
                                            <span className="input-group-text bg-dark border-secondary text-muted">S/</span>
                                            <input type="number" step="0.01" className="form-control" id="precio_venta" placeholder="0.00" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="stock_actual" className="form-label text-secondary small text-uppercase fw-bold">Stock Actual</label>
                                        <input type="number" className="form-control form-control-lg" id="stock_actual" placeholder="0" />
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="stock_minimo" className="form-label text-secondary small text-uppercase fw-bold">Stock Mínimo</label>
                                        <input type="number" className="form-control form-control-lg" id="stock_minimo" placeholder="0" />
                                    </div>
                                </div>

                                <div className="d-flex justify-content-end gap-3 pt-4 border-top border-secondary">
                                    <button type="button" className="btn btn-outline-light btn-lg px-4">Limpiar</button>
                                    <button type="submit" className="btn btn-primary btn-lg px-5 fw-bold">Guardar Producto</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
