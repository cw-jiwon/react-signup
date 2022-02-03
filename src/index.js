import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { UsersProvider } from './UserContext'

ReactDOM.render(
	<React.StrictMode>
		<UsersProvider>
			<App />
		</UsersProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
