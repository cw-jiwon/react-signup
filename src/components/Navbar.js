import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
	const [sign, setSign] = useState(false)

	const onClick = () => {
		setSign(prev => !prev)
	}
	
	return (
		<>
			<ul className='navbar'>
				{sign ? (
					<li>
						<Link to='/'>
							<button onClick={onClick}>SIGN IN</button>
						</Link>
					</li>
				) : (
					<li>
						<Link to='/sign_up'>
							<button onClick={onClick}>SIGN UP</button>
						</Link>
					</li>
				)}
			</ul>
		</>
	)
}

export default Navbar
