// reducer
export function createAsyncHandler() {
	function handler(state, action) {
		switch (action.type) {
			case 'GET_USERS':
				return {
					...state,
					users: {
						data: action.data
					}
				}
			case 'POST_USER':
				const data = action.data && state.users.data.push(action.data)
				return {
					...state,
					data
				}
			default:
				return state
		}
	}

	return handler
}

export function createAsyncDispatcher(type, promiseFn) {
	async function actionHandler(dispatch, param) {
		// dispatch({ type })
		try {
			if (type === 'GET_USERS') {
				const data = await promiseFn()
				dispatch({
					type,
					data
				})
			} else {
				dispatch({
					type,
					data: param
				})
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
