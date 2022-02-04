import React, { useState, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAddOutlined } from '@ant-design/icons'
import AInput from './atoms/AInput'
import AButton from './atoms/AButton'
import { useUsersDispatch, useUserId, postUser } from '../UserContext'
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

	const navigate = useNavigate()

	const nextId = useUserId()
	const dispatch = useUsersDispatch()

	const onChangeHandler = useCallback(
		event => {
			const { name, value } = event.currentTarget
			setInputs({
				...inputs,
				[name]: value
			})
		},
		[inputs]
	)
	const signup = useCallback(() => {
		if (password !== confirmPassword) {
			passwordInput.current.focus()
			return alert('비밀번호와 비밀번호확인은 같아야 합니다.')
		}
		const user = {
			id: nextId.current,
			email
		}
		nextId.current += 1
		const response = postUser(dispatch, user)
		if (response) {
			alert('회원가입에 성공하였습니다.')
			navigate('/')
		} else {
			alert('회원가입에 실패하였습니다.')
		}
	}, [password, confirmPassword, nextId, email, dispatch, navigate])

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
			</div>
		</div>
	)
}
export default SignupPage
