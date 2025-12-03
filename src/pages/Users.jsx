import { useState, useEffect } from "react";
import { userService } from "../services/api";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({
        username: "",
        nombre: "",
        email: "",
        password: "",
        rol: "user"
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        try {
            const data = await userService.getAll();
            setUsers(Array.isArray(data) ? data : []);
        } catch (err) {
            console.error("Error loading users:", err);
            // setError("No se pudieron cargar los usuarios");
        }
    };

    const handleChange = (e) => {
        const { id, name, value } = e.target;
        const field = id || name; // Support both id and name attributes
        console.log(`Field changed: ${field} = ${value}`); // DEBUG
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");

        try {
            if (isEditing) {
                // No enviamos password si está vacío en edición
                const dataToSend = { ...formData };
                if (!dataToSend.password) delete dataToSend.password;

                await userService.update(editId, dataToSend);
                setSuccess("Usuario actualizado correctamente");
            } else {
                await userService.create(formData);
                setSuccess("Usuario creado correctamente");
            }
            loadUsers();
            resetForm();
        } catch (err) {
            setError(err.message || "Error al guardar el usuario");
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (user) => {
        setFormData({
            nombre: user.nombre || "",
            email: user.email || "",
            password: "", // No mostramos la contraseña
            rol: user.rol || "user"
        });
        setIsEditing(true);
        setEditId(user.id_usuario || user.id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDelete = async (id) => {
        if (window.confirm("¿Está seguro de eliminar este usuario?")) {
            try {
                await userService.delete(id);
                loadUsers();
                setSuccess("Usuario eliminado correctamente");
            } catch (err) {
                setError(err.message || "Error al eliminar el usuario");
            }
        }
    };

    const resetForm = () => {
        setFormData({
            nombre: "",
            email: "",
            password: "",
            rol: "user"
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
                            <h1 className="fw-bold text-white mb-1">Gestión de Usuarios</h1>
                            <p className="text-muted mb-0">Administre los usuarios del sistema.</p>
                        </div>
                    </div>

                    {/* Formulario */}
                    <div className="card shadow-sm border-0 mb-5">
                        <div className="card-header bg-transparent border-bottom border-secondary py-3">
                            <h5 className="mb-0 text-primary fw-bold">
                                {isEditing ? "Editar Usuario" : "Nuevo Usuario"}
                            </h5>
                        </div>
                        <div className="card-body p-4">
                            {error && <div className="alert alert-danger">{error}</div>}
                            {success && <div className="alert alert-success">{success}</div>}

                            <form onSubmit={handleSubmit}>
                                <div className="row g-4 mb-4">
                                    <div className="col-md-6">
                                        <label htmlFor="username" className="form-label text-secondary small text-uppercase fw-bold">Usuario</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            id="username"
                                            name="username"
                                            value={formData.username}
                                            onChange={handleChange}
                                            placeholder="Ej: juanperez"
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="nombre" className="form-label text-secondary small text-uppercase fw-bold">Nombre Completo</label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            id="nombre"
                                            name="nombre"
                                            value={formData.nombre}
                                            onChange={handleChange}
                                            placeholder="Ej: Juan Pérez"
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="email" className="form-label text-secondary small text-uppercase fw-bold">Correo Electrónico</label>
                                        <input
                                            type="email"
                                            className="form-control form-control-lg"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="nombre@empresa.com"
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="password" className="form-label text-secondary small text-uppercase fw-bold">
                                            {isEditing ? "Contraseña (dejar en blanco para no cambiar)" : "Contraseña"}
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control form-control-lg"
                                            id="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            placeholder="••••••••"
                                            required={!isEditing}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="rol" className="form-label text-secondary small text-uppercase fw-bold">Rol</label>
                                        <select
                                            className="form-select form-select-lg"
                                            id="rol"
                                            value={formData.rol}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="user">Usuario</option>
                                            <option value="admin">Administrador</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-end gap-3 pt-4 border-top border-secondary">
                                    <button type="button" className="btn btn-outline-light btn-lg px-4" onClick={resetForm}>
                                        {isEditing ? "Cancelar" : "Limpiar"}
                                    </button>
                                    <button type="submit" className="btn btn-primary btn-lg px-5 fw-bold" disabled={loading}>
                                        {loading ? "Guardando..." : (isEditing ? "Actualizar Usuario" : "Guardar Usuario")}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Tabla de Listado */}
                    <div className="card shadow-sm border-0">
                        <div className="card-header bg-transparent border-bottom border-secondary py-3">
                            <h5 className="mb-0 text-primary fw-bold">Listado de Usuarios</h5>
                        </div>
                        <div className="card-body p-0">
                            <div className="table-responsive">
                                <table className="table table-hover align-middle mb-0">
                                    <thead className="bg-light">
                                        <tr>
                                            <th className="ps-4">Nombre</th>
                                            <th>Email</th>
                                            <th>Rol</th>
                                            <th className="text-end pe-4">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.length > 0 ? (
                                            users.map((user) => (
                                                <tr key={user.id}>
                                                    <td className="ps-4 fw-bold">{user.nombre}</td>
                                                    <td>{user.email}</td>
                                                    <td>
                                                        <span className={`badge ${user.rol === 'admin' ? 'bg-primary' : 'bg-secondary'}`}>
                                                            {user.rol}
                                                        </span>
                                                    </td>
                                                    <td className="text-end pe-4">
                                                        <button
                                                            className="btn btn-sm btn-outline-primary me-2"
                                                            onClick={() => handleEdit(user)}
                                                        >
                                                            <i className="bi bi-pencil"></i>
                                                        </button>
                                                        <button
                                                            className="btn btn-sm btn-outline-danger"
                                                            onClick={() => handleDelete(user.id_usuario || user.id)}
                                                        >
                                                            <i className="bi bi-trash"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="4" className="text-center py-4 text-muted">
                                                    No hay usuarios registrados
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
