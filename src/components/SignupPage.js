import React, { useState, useRef } from 'react'
import { UserAddOutlined } from '@ant-design/icons'
import AInput from './atoms/AInput'
import AButton from './atoms/AButton'
import UserList from './UserList'
import './LoginSignup.css'

function SignupPage() {
	const [inputs, setInputs] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: ''
	})
	const { name, email, password, confirmPassword } = inputs

	const passwordInput = useRef(null)

	const onChangeHandler = event => {
		const { name, value } = event.currentTarget
		setInputs({
			...inputs,
			[name]: value
		})
	}

	const [users, setUsers] = useState([])
	const signup = () => {
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
	}

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
