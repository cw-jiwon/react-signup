import axios from 'axios'

export async function getUsers() {
	const users = []
	const response = await axios.get(
		'https://jsonplaceholder.typicode.com/users'
	)

	response.data &&
		response.data.map(data =>
			users.push({ id: data.id, email: data.email })
		)
	return users
}
