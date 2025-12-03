const API_URL = "/api"; // Usamos el proxy de Vite

export const getHeaders = () => {
    const token = localStorage.getItem("token");
    return {
        "Content-Type": "application/json",
        "Authorization": token ? `Bearer ${token}` : ""
    };
};

// Función genérica para peticiones
const request = async (endpoint, options = {}) => {
    const url = `${API_URL}${endpoint}`;
    const headers = getHeaders();

    const config = {
        ...options,
        headers: {
            ...headers,
            ...options.headers
        }
    };

    console.log(`Requesting: ${url}`, config); // DEBUG: Ver qué estamos enviando

    try {
        const response = await fetch(url, config);

        if (response.status === 401) {
            // Token expirado o inválido
            localStorage.removeItem("token");
            window.location.href = "/login";
            throw new Error("Sesión expirada");
        }

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.message || "Error en la petición");
        }

        return await response.json();
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }
};

export const authService = {
    login: async (username, password) => {
        // Backend usa /auth/login y espera 'username'
        const data = await request("/auth/login", {
            method: "POST",
            body: JSON.stringify({ username, password })
        });
        if (data.token) {
            localStorage.setItem("token", data.token);
            if (data.user) {
                localStorage.setItem("user", JSON.stringify(data.user));
            }
        }
        return data;
    },
    logout: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/login";
    }
};

export const productService = {
    getAll: () => request("/productos"), // Backend usa /productos
    getById: (id) => request(`/productos/${id}`),
    create: (data) => request("/productos", {
        method: "POST",
        body: JSON.stringify(data)
    }),
    update: (id, data) => request(`/productos/${id}`, {
        method: "PUT",
        body: JSON.stringify(data)
    }),
    delete: (id) => request(`/productos/${id}`, {
        method: "DELETE"
    })
};

export const userService = {
    getAll: () => request("/usuarios"), // Backend usa /usuarios
    getById: (id) => request(`/usuarios/${id}`),
    create: (data) => request("/usuarios", {
        method: "POST",
        body: JSON.stringify(data)
    }),
    update: (id, data) => request(`/usuarios/${id}`, {
        method: "PUT",
        body: JSON.stringify(data)
    }),
    delete: (id) => request(`/usuarios/${id}`, {
        method: "DELETE"
    })
};
