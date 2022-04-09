import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Blank from './pages/Blank'
import Dashboard from './pages/Dashboard'
import MainLayout from './layout/MainLayout'

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{
				user && <Route path="/" exact element={<MainLayout />}>
					<Route index element={<Dashboard />} />
					<Route path="orders" element={<Blank />} />
					<Route path="products" element={<Blank />} />
					<Route path="customers" element={<Blank />} />
					<Route path="settings" element={<Blank />} />
					<Route path="stats" element={<Blank />} />
				</Route>
			}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;
