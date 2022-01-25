import React from 'react'

function UserList({ users }) {
	return (
		<div>
			{users.map(user => (
				<span key={user.email}>
					<b>{user.name}</b>({user.email})
				</span>
			))}
		</div>
	)
}

export default UserList
