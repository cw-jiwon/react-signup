import React, { forwardRef } from 'react'

const AInput = forwardRef((props, ref) => {
	return (
		<input
			name={props.name}
			type={props.type}
			placeholder={props.placeholder}
			value={props.value}
			ref={ref}
			onChange={props.onChange}
			className={props.className}
		/>
	)
})

export default AInput
