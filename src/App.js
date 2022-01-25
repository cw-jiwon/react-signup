import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' element={<LoginPage />} />
				<Route path='/sign_in' element={<LoginPage />} />
				<Route path='/sign_up' element={<SignupPage />} />
			</Routes>
		</Router>
	)
}

export default App
