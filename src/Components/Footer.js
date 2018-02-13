/**
 * Created by skynetsaa on 13.02.18.
 */
import React from 'react'
import FilterLink from '../Containers/FilterLink'

const Footer = () => (
	<p>
		Show:
		{' '}
		<FilterLink filter="SHOW_ALL">
			All
		</FilterLink>
		{', '}
		<FilterLink filter="SHOW_ACTIVE">
			Active
		</FilterLink>
		{', '}
		<FilterLink filter="SHOW_COMPLETED">
			Completed
		</FilterLink>
	</p>
)

export default Footer