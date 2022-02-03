import React, { createContext, useReducer, useContext, useRef } from 'react'
import { createAsyncDispatcher, createAsyncHandler } from './asyncActionUtils'
import * as api from './api'

const initialState = {
	users: {
		data: null
	}
}

const usersHandler = createAsyncHandler()

function usersReducer(state, action) {
	switch (action.type) {
		case 'GET_USERS':
			return usersHandler(state, action)
		case 'POST_USER':
			return usersHandler(state, action)
		case 'DELETE_USER':
			return usersHandler(state, action)
		default:
			throw new Error(`Unhanded action type: ${action.type}`)
	}
}

// dispatch만 필요한 컴포넌트에서 불필요한 렌더링 방지를 위해 각각 생성
const UsersStateContext = createContext()
const UsersDispatchContext = createContext()
const UserNextIdContext = createContext()

export function UsersProvider({ children }) {
	const [state, dispatch] = useReducer(usersReducer, initialState)
	const nextId = useRef(11)
	return (
		<UsersStateContext.Provider value={state}>
			<UsersDispatchContext.Provider value={dispatch}>
				<UserNextIdContext.Provider value={nextId}>
					{children}
				</UserNextIdContext.Provider>
			</UsersDispatchContext.Provider>
		</UsersStateContext.Provider>
	)
}

// 커스텀 Hook
export function useUsersState() {
	const state = useContext(UsersStateContext)
	if (!state) {
		throw new Error('Cannot find UsersProvider')
	}
	return state
}

export function useUsersDispatch() {
	const dispatch = useContext(UsersDispatchContext)
	if (!dispatch) {
		throw new Error('Cannot find UsersProvider')
	}
	return dispatch
}

export function useUserId() {
	const dispatch = useContext(UserNextIdContext)
	if (!dispatch) {
		throw new Error('Cannot find UsersProvider')
	}
	return dispatch
}

export const getUsers = createAsyncDispatcher('GET_USERS', api.getUsers)
export const postUser = createAsyncDispatcher('POST_USER')
export const deleteUser = createAsyncDispatcher('DELETE_USER')
