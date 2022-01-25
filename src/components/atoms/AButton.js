import React from 'react'

function AButton({ onClick, className, text }) {
	return (
		<button onClick={onClick} className={className}>
			{text}
		</button>
	)
}

export default AButton
