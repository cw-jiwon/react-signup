export function createAsyncHandler() {
	// 1 (최초)
	function handler(state, action) {
		// 2
		switch (action.type) {
			case 'GET_USERS':
				return {
					...state,
					users: action.data
				}
			case 'POST_USER':
				const all_users = state.users.concat(action.data)
				return {
					...state,
					users: all_users
				}
			case 'DELETE_USER':
				const left_users = state.users.filter(
					item => item.id !== action.data
				)
				return {
					...state,
					users: left_users
				}
			default:
				return state
		}
	}

	return handler
}

export function createAsyncDispatcher(type, promiseFn) {
	// 2 (최초)
	async function actionHandler(dispatch, param) {
		// 1
		try {
			switch (type) {
				case 'GET_USERS':
					const data = await promiseFn()
					dispatch({
						type,
						data
					})
					break
				case 'POST_USER':
				case 'DELETE_USER':
					dispatch({
						type,
						data: param
					})
					break
				default:
					dispatch({
						type: 'ERROR'
					})
					break
			}
		} catch (error) {
			dispatch({
				type: 'ERROR',
				error: error
			})
		}
	}

	return actionHandler
}
