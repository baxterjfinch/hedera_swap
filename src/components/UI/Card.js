import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'

const useStyles = makeStyles(theme => ({
	card: {
		background: theme.body.backgroundLeft,
		color: theme.text.primary,
		padding: 30,
	}
}))

export default function CustomCard(props) {
	const { children, className='', ...restProps } = props
	const classes = useStyles()

	return (
		<Card raised={true} className={`${classes.card} ${className}`} {...restProps}>
			{ children }
		</Card>
	)
}