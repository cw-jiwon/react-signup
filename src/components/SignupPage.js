import React, {
	useState,
	useRef,
	useEffect,
	useCallback,
	useReducer
} from 'react'
import { UserAddOutlined } from '@ant-design/icons'
import AInput from './atoms/AInput'
import AButton from './atoms/AButton'
import UserList from './UserList'
import './LoginSignup.css'

function reducer(state, action) {
	switch (action.type) {
		case 'CHANGE_INPUT':
			return {
				...state,
				inputs: {
					...state.inputs,
					[action.name]: action.value
				}
			}
		default:
			return state
	}
}

const initialState = {
	inputs: {
		name: '',
		email: '',
		password: '',
		confirmPassword: ''
	},
	users: []
}

function SignupPage() {
	useEffect(() => {
		console.log('mount')
		return () => {
			console.log('unmount')
		}
	}, [])

	const [state, dispatch] = useReducer(reducer, initialState)
	const { name, email, password, confirmPassword } = state.inputs

	const passwordInput = useRef(null)

	const onChangeHandler = useCallback(event => {
		const { name, value } = event.currentTarget
		dispatch({
			type: 'CHANGE_INPUT',
			name,
			value
		})
	}, [])

	const [users, setUsers] = useState([])
	const signup = useCallback(() => {
		if (password !== confirmPassword) {
			passwordInput.current.focus()
			return alert('비밀번호와 비밀번호확인은 같아야 합니다.')
		}
		const user = {
			name,
			email,
			password,
			confirmPassword
		}
		setUsers([...users, user])
	}, [users, name, email, password, confirmPassword])

	return (
		<div className='loginsignup'>
			<div>
				<UserAddOutlined className='icon' />
				<AInput
					name='name'
					type='text'
					placeholder='NAME'
					value={name}
					onChange={onChangeHandler}
					className='loginsignup_input'
				/>
				<AInput
					name='email'
					type='email'
					placeholder='EMAIL'
					value={email}
					onChange={onChangeHandler}
					className='loginsignup_input'
				/>
				<AInput
					name='password'
					type='password'
					placeholder='PASSWORD'
					value={password}
					ref={passwordInput}
					onChange={onChangeHandler}
					className='loginsignup_input'
				/>
				<AInput
					name='confirmPassword'
					type='password'
					placeholder='CONFIRM'
					value={confirmPassword}
					onChange={onChangeHandler}
					className='loginsignup_input'
				/>
				<AButton
					onClick={signup}
					className='loginsignup_button'
					text='REGISTER'
				/>
				<UserList users={users} />
			</div>
		</div>
	)
}
export default SignupPage
