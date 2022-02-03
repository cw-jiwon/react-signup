import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import LoginSuccessPage from './components/LoginSuccessPage'

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' element={<LoginPage />} />
				<Route path='/sign_up' element={<SignupPage />} />
				<Route path='/login_success' element={<LoginSuccessPage />} />
			</Routes>
		</Router>
	)
}

export default App
