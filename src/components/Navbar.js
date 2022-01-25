import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
	const [sign, setSign] = useState(false)
	const onClick = () => {
		setSign(prev => !prev)
	}
	return (
		<div>
			<ul className='navbar'>
				{sign ? (
					<li>
						<Link to='/sign_in'>
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
		</div>
	)
}

export default Navbar
