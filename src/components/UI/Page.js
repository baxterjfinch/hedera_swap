import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import SideBar from "./SideBar";

const useStyles = makeStyles(theme => ({
	root: ({ isMobile, menuOpen }) => ({
		marginLeft: isMobile
			?
			theme.sideBar.widthClosed
			: !menuOpen
				? theme.sideBar.widthClosed
				: theme.sideBar.widthOpen,
		paddingRight: isMobile
			? 0
			: !menuOpen
				? theme.appBar.height
				: theme.appBar.height,
		paddingLeft: isMobile
			? 0
			: !menuOpen
				? theme.appBar.height
				: theme.appBar.height,
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		},),
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center'
	}),
	childContainer: {
		display: 'flex',
		flexDirection: 'column',
		webkitFlexWrap: 'wrap',
		flexWrap: 'wrap',
		height: '100%',
	},
	menu: ({isMobile, menuOpen}) => ({
		position: 'fixed',
		top: '50px',
		height: 'calc(100% - 50px)',
		left: '0px',
		width: isMobile
			? theme.appBar.height / 2
			: !menuOpen
				? theme.sideBar.widthClosed
				: theme.sideBar.widthOpen,
		backgroundColor: 'white'
	}),
	container: {
		display: 'flex',
		flexDirection: 'column',
		flexGrow: 1,
		height: '100%',
		width: '100%',
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	},
	cta: {
		display: 'flex',
	},
	header: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
	},
	title: {
		color: theme.text.primary,
		display: 'flex',
		flexDirection: 'column',
	},
	breadcrumbs: {
		display: 'flex',
		flexDirection: 'row',
		marginBottom: 20,
		'& a': {
			color: theme.text.highlight,
			textDecoration: 'none',
		}
	}
}))

export default function Page(props) {
	const { breadcrumbs=[], children, className, cta, style, subTitle='', title='' } = props
	const { Settings } = useSelector(state => state)
	const { isMobile, menuOpen } = Settings
	const classes = useStyles({ menuOpen, isMobile })

	const renderBreadcrumbs = () =>

		<>
			<div className={classes.breadcrumbs}>
				{
					breadcrumbs.map((link,i) => i < breadcrumbs.length-1 && link?.label?.length
						?
						<>
							<Typography key={i}>
								<Link to={link.path}>{link.label}</Link>
								&nbsp;{`>`}&nbsp;
							</Typography>
						</>
						: <Typography key={i}>{link.label}</Typography>
					)
				}
			</div>
		</>


	return (
		<>
			<SideBar setPage={(page) => {props._setPage(page)}} page={props.page} />
				<main className={`${classes.root} ${className ? className : ''}`} style={style}>
					<div className={classes.container}>
						<div className={classes.header}>
							<div className={classes.title}>
								<Typography gutterBottom>{}</Typography>
								<Typography gutterBottom>{subTitle}</Typography>
								{
									breadcrumbs.length
										?
										<>
											{renderBreadcrumbs()}
										</>
										: null
								}
							</div>
							<div className={classes.cta}>{cta}</div>
						</div>
						<div className={classes.childContainer}>
							{ children }
						</div>
					</div>
				</main>
		</>
	)
}
