import { useState, useEffect } from "react";
import { productService } from "../services/api";

export default function Product() {
    const [products, setProducts] = useState([]);
    const [formData, setFormData] = useState({
        nombre: "",
        categoria: "",
        marca: "",
        modelo: "",
        descripcion: "",
        precio_compra: "",
        precio_venta: "",
        stock_actual: "",
        stock_minimo: ""
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        try {
            const data = await productService.getAll();
            setProducts(Array.isArray(data) ? data : []);
        } catch (err) {
            console.error("Error loading products:", err);
            // setError("No se pudieron cargar los productos");
        }
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");

        try {
            if (isEditing) {
                await productService.update(editId, formData);
                setSuccess("Producto actualizado correctamente");
            } else {
                await productService.create(formData);
                setSuccess("Producto creado correctamente");
            }
            loadProducts();
            resetForm();
        } catch (err) {
            setError(err.message || "Error al guardar el producto");
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (product) => {
        setFormData({
            nombre: product.nombre || "",
            categoria: product.categoria || "",
            marca: product.marca || "",
            modelo: product.modelo || "",
            descripcion: product.descripcion || "",
            precio_compra: product.precio_compra || "",
            precio_venta: product.precio_venta || "",
            stock_actual: product.stock_actual || "",
            stock_minimo: product.stock_minimo || ""
        });
        setIsEditing(true);
        setEditId(product.id);
        // Scroll to form
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDelete = async (id) => {
        if (window.confirm("¿Está seguro de eliminar este producto?")) {
            try {
                await productService.delete(id);
                loadProducts();
                setSuccess("Producto eliminado correctamente");
            } catch (err) {
                setError(err.message || "Error al eliminar el producto");
            }
        }
    };

    const resetForm = () => {
        setFormData({
            nombre: "",
            categoria: "",
            marca: "",
            modelo: "",
            descripcion: "",
            precio_compra: "",
            precio_venta: "",
            stock_actual: "",
            stock_minimo: ""
        });
        setIsEditing(false);
        setEditId(null);
    };

    return (
        <div className="container-fluid py-4 px-5">
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                            <h1 className="fw-bold text-white mb-1">Gestión de Productos</h1>
                            <p className="text-muted mb-0">Administre el inventario de productos.</p>
                        </div>
                    </div>

                    {/* Formulario */}
                    <div className="card shadow-sm border-0 mb-5">
                        <div className="card-header bg-transparent border-bottom border-secondary py-3">
                            <h5 className="mb-0 text-primary fw-bold">
                                {isEditing ? "Editar Producto" : "Nuevo Producto"}
                            </h5>
                        </div>
                        <div className="card-body p-4">
                            {error && <div className="alert alert-danger">{error}</div>}
                            {success && <div className="alert alert-success">{success}</div>}

                            <form onSubmit={handleSubmit}>
                                <div className="row g-4 mb-4">
                                    <div className="col-md-6">
                                        <label htmlFor="nombre" className="form-label text-secondary small text-uppercase fw-bold">Nombre del Producto</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            id="nombre"
                                            value={formData.nombre}
                                            onChange={handleChange}
                                            placeholder="Ej: Laptop HP Pavilion"
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="categoria" className="form-label text-secondary small text-uppercase fw-bold">Categoría</label>
                                        <select
                                            className="form-select form-select-lg"
                                            id="categoria"
                                            value={formData.categoria}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Seleccionar...</option>
                                            <option value="1">Electrónica</option>
                                            <option value="2">Ropa</option>
                                            <option value="3">Hogar</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="marca" className="form-label text-secondary small text-uppercase fw-bold">Marca</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            id="marca"
                                            value={formData.marca}
                                            onChange={handleChange}
                                            placeholder="Ej: HP"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="modelo" className="form-label text-secondary small text-uppercase fw-bold">Modelo</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            id="modelo"
                                            value={formData.modelo}
                                            onChange={handleChange}
                                            placeholder="Ej: 15-dw3000"
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="descripcion" className="form-label text-secondary small text-uppercase fw-bold">Descripción Detallada</label>
                                        <textarea
                                            className="form-control form-control-lg"
                                            id="descripcion"
                                            rows="3"
                                            value={formData.descripcion}
                                            onChange={handleChange}
                                            placeholder="Ingrese una descripción..."
                                        ></textarea>
                                    </div>
                                </div>

                                <h5 className="mb-4 text-primary fw-bold border-bottom border-secondary pb-2">Precios e Inventario</h5>

                                <div className="row g-4 mb-4">
                                    <div className="col-md-3">
                                        <label htmlFor="precio_compra" className="form-label text-secondary small text-uppercase fw-bold">Precio Compra</label>
                                        <div className="input-group input-group-lg">
                                            <span className="input-group-text bg-dark border-secondary text-muted">S/</span>
                                            <input
                                                type="number"
                                                step="0.01"
                                                className="form-control"
                                                id="precio_compra"
                                                value={formData.precio_compra}
                                                onChange={handleChange}
                                                placeholder="0.00"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="precio_venta" className="form-label text-secondary small text-uppercase fw-bold">Precio Venta</label>
                                        <div className="input-group input-group-lg">
                                            <span className="input-group-text bg-dark border-secondary text-muted">S/</span>
                                            <input
                                                type="number"
                                                step="0.01"
                                                className="form-control"
                                                id="precio_venta"
                                                value={formData.precio_venta}
                                                onChange={handleChange}
                                                placeholder="0.00"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="stock_actual" className="form-label text-secondary small text-uppercase fw-bold">Stock Actual</label>
                                        <input
                                            type="number"
                                            className="form-control form-control-lg"
                                            id="stock_actual"
                                            value={formData.stock_actual}
                                            onChange={handleChange}
                                            placeholder="0"
                                            required
                                        />
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="stock_minimo" className="form-label text-secondary small text-uppercase fw-bold">Stock Mínimo</label>
                                        <input
                                            type="number"
                                            className="form-control form-control-lg"
                                            id="stock_minimo"
                                            value={formData.stock_minimo}
                                            onChange={handleChange}
                                            placeholder="0"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="d-flex justify-content-end gap-3 pt-4 border-top border-secondary">
                                    <button type="button" className="btn btn-outline-light btn-lg px-4" onClick={resetForm}>
                                        {isEditing ? "Cancelar" : "Limpiar"}
                                    </button>
                                    <button type="submit" className="btn btn-primary btn-lg px-5 fw-bold" disabled={loading}>
                                        {loading ? "Guardando..." : (isEditing ? "Actualizar Producto" : "Guardar Producto")}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Tabla de Listado */}
                    <div className="card shadow-sm border-0">
                        <div className="card-header bg-transparent border-bottom border-secondary py-3">
                            <h5 className="mb-0 text-primary fw-bold">Listado de Productos</h5>
                        </div>
                        <div className="card-body p-0">
                            <div className="table-responsive">
                                <table className="table table-hover align-middle mb-0">
                                    <thead className="bg-light">
                                        <tr>
                                            <th className="ps-4">Producto</th>
                                            <th>Marca</th>
                                            <th>Precio Venta</th>
                                            <th>Stock</th>
                                            <th className="text-end pe-4">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.length > 0 ? (
                                            products.map((product) => (
                                                <tr key={product.id}>
                                                    <td className="ps-4 fw-bold">{product.nombre}</td>
                                                    <td>{product.marca}</td>
                                                    <td>S/ {product.precio_venta}</td>
                                                    <td>
                                                        <span className={`badge ${product.stock_actual <= product.stock_minimo ? 'bg-danger' : 'bg-success'}`}>
                                                            {product.stock_actual}
                                                        </span>
                                                    </td>
                                                    <td className="text-end pe-4">
                                                        <button
                                                            className="btn btn-sm btn-outline-primary me-2"
                                                            onClick={() => handleEdit(product)}
                                                        >
                                                            <i className="bi bi-pencil"></i>
                                                        </button>
                                                        <button
                                                            className="btn btn-sm btn-outline-danger"
                                                            onClick={() => handleDelete(product.id_producto || product.id)}
                                                        >
                                                            <i className="bi bi-trash"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="5" className="text-center py-4 text-muted">
                                                    No hay productos registrados
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
