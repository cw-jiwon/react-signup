import React, { useEffect } from 'react'
import { useUsersState, useUsersDispatch, getUsers } from '../UserContext'

function LoginSuccessPage() {
	const state = useUsersState()
	const dispatch = useUsersDispatch()
	const { data: users } = state.users

	useEffect(() => {
		getUsers(dispatch)
	}, [dispatch])

	return (
		<ul>
			{users && users.map(user => <li key={user.id}>{user.email}</li>)}
		</ul>
	)
}

export default LoginSuccessPage
