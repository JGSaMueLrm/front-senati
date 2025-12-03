import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";
import { authService } from "../services/api";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            navigate("/home");
        }
    }, [navigate]);

    const sendUser = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await authService.login(username, password);
            navigate("/home");
        } catch (err) {
            // FALLBACK: Si falla la API, permitimos entrar con el usuario admin hardcodeado
            if (username === "admin" && password === "123") {
                localStorage.setItem("token", "token-admin-temporal");
                localStorage.setItem("user", JSON.stringify({ nombre: "Administrador", username: "admin", rol: "admin" }));
                navigate("/home");
                return;
            }

            console.error("Login error:", err);
            setError(err.message || "Error al iniciar sesión. Verifique sus credenciales.");
        }
    }

    return (
        <div className="d-flex align-items-center justify-content-center min-vh-100" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
            <div className="card shadow-lg border-0" style={{ width: "100%", maxWidth: "450px", borderRadius: "12px" }}>
                <div className="card-body p-5">
                    {/* Header */}
                    <div className="text-center mb-4">
                        <div className="mb-3">
                            <div className="d-inline-block p-3 rounded-circle" style={{ backgroundColor: "#e3f2fd" }}>
                                <i className="bi bi-building" style={{ fontSize: "3rem", color: "#0066cc" }}></i>
                            </div>
                        </div>
                        <h2 className="fw-bold mb-1" style={{ color: "#2c3e50" }}>SENATI ERP</h2>
                        <p className="text-muted mb-0">Sistema de Gestión Empresarial</p>
                        <div className="mt-2">
                            <small className="text-muted">Inicie sesión para continuar</small>
                        </div>
                    </div>

                    {error && (
                        <div className="alert alert-danger py-2 small border-0" role="alert" style={{ backgroundColor: "#fee", color: "#c33" }}>
                            <i className="bi bi-exclamation-circle me-2"></i>
                            {error}
                        </div>
                    )}

                    <form onSubmit={sendUser}>
                        <div className="mb-3">
                            <label className="form-label fw-semibold small" style={{ color: "#5a6c7d" }}>
                                <i className="bi bi-person me-2"></i>
                                Usuario
                            </label>
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Ingrese su usuario"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                style={{ borderRadius: "8px", border: "2px solid #d1dce5" }}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="form-label fw-semibold small" style={{ color: "#5a6c7d" }}>
                                <i className="bi bi-lock me-2"></i>
                                Contraseña
                            </label>
                            <input
                                type="password"
                                className="form-control form-control-lg"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                style={{ borderRadius: "8px", border: "2px solid #d1dce5" }}
                            />
                        </div>
                        <div className="d-grid gap-2 mb-3">
                            <button
                                type="submit"
                                className="btn btn-lg fw-bold"
                                style={{
                                    backgroundColor: "#0066cc",
                                    borderColor: "#0066cc",
                                    color: "white",
                                    borderRadius: "8px",
                                    padding: "12px"
                                }}
                            >
                                <i className="bi bi-box-arrow-in-right me-2"></i>
                                Iniciar Sesión
                            </button>
                        </div>
                        <div className="text-center">
                            <a href="#" className="text-decoration-none small" style={{ color: "#0066cc" }}>
                                ¿Olvidó su contraseña?
                            </a>
                        </div>
                    </form>
                </div>
                <div className="card-footer text-center py-3 border-0" style={{ backgroundColor: "#f5f7fa", borderBottomLeftRadius: "12px", borderBottomRightRadius: "12px" }}>
                    <small className="text-muted">
                        <i className="bi bi-shield-check me-1"></i>
                        Acceso seguro · <a href="#" className="text-decoration-none" style={{ color: "#0066cc" }}>Soporte técnico</a>
                    </small>
                </div>
            </div>
        </div>
    )
}
