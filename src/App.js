import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import LoginSuccessPage from './components/LoginSuccessPage'
import { UsersProvider } from './UserContext'

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route
					path='/'
					element={
						<UsersProvider>
							<LoginPage />
						</UsersProvider>
					}
				/>
				<Route
					path='/sign_in'
					element={
						<UsersProvider>
							<LoginPage />
						</UsersProvider>
					}
				/>

				<Route
					path='/sign_up'
					element={
						<UsersProvider>
							<SignupPage />
						</UsersProvider>
					}
				/>
				<Route
					path='/login_success'
					element={
						<UsersProvider>
							<LoginSuccessPage />
						</UsersProvider>
					}
				/>
			</Routes>
		</Router>
	)
}

export default App
