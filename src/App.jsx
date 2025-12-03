import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";
import Users from "./pages/Users";
import Sidebar from "./components/Sidebar";
import './App.css'

function AppRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
}

function LayoutWithSidebar({ children }) {
  return (
    <div className="sidebar-layout">
      <Sidebar />
      <div className="main-content">
        {children}
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={
          <AppRoute>
            <LayoutWithSidebar>
              <Home />
            </LayoutWithSidebar>
          </AppRoute>
        } />
        <Route path="/category" element={
          <AppRoute>
            <LayoutWithSidebar>
              <Category />
            </LayoutWithSidebar>
          </AppRoute>
        } />
        <Route path="/product" element={
          <AppRoute>
            <LayoutWithSidebar>
              <Product />
            </LayoutWithSidebar>
          </AppRoute>
        } />
        <Route path="/users" element={
          <AppRoute>
            <LayoutWithSidebar>
              <Users />
            </LayoutWithSidebar>
          </AppRoute>
        } />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
