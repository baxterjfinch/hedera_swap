import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Collapse from '@material-ui/core/Collapse'
import Typography from '@material-ui/core/Typography'
import { setActivePage, setMenuOpen } from '../../redux/modules/settings'
import getTheme from '../../themes'
import { contentWidth } from '../../themes/base'

const useStyles = makeStyles(theme => ({
	row: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	bold: {
		fontWeight: 'bold',
	},
	collapseContainer: {
		overflowX: 'hidden',
		//overflowY: 'scroll'
	},
	drawer: ({ isMobile }) => ({
		display: 'flex',
		backgroundColor: isMobile ? 'transparent' : theme.sideBar.backgroundColor,
		width: theme.sideBar.widthOpen,
		height: '100%',
		flexShrink: 0,
		whiteSpace: 'nowrap',
	}),
	drawerOpen: {
		//boxShadow: '0px 0px 15px #000',
		backgroundColor: theme.sideBar.backgroundColor,
		overflowX: 'hidden',
		width: theme.sideBar.widthOpen,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
		'&::-webkit-scrollbar': {
			display: 'none'
		}
	},
	drawerClose: {
		//boxShadow: '0px 0px 15px #000',
		backgroundColor: theme.sideBar.backgroundColor,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: 'hidden',
		visibility: 'visible',
		width: theme.sideBar.widthClosed,
	},
	drawerPaper: {
		alignItems: 'center',
		backgroundColor: theme.sideBar.backgroundColor,
		width: theme.sideBar.widthOpen,
	},
	hidden: {
		visibility: 'hidden'
	},
	highlight: {
		backgroundColor: theme.sideBar.highlight,
	},
	childHighlight: {
		backgroundColor: theme.sideBar.childHighlight,
	},
	list: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		position: 'relative',
		overflow: 'hidden',
	},
	listItem: {
		cursor: 'pointer',
		paddingLeft: 0,
		paddingRight: 0,
		height: '50px'
	},
	listItemIcon:{
		display: "flex",
		width: 50,
		justifyContent: "center",
		color: "white"
	},
	listItemText: {
		color: theme.sideBar.color,
		fontSize: theme.sideBar.fontSize,
		display: 'flex'
	},
	childListItem: {
		cursor: 'pointer',
		paddingLeft: 70,
		paddingRight: 0,
		height: '40px',

	},
	childListItemText: {
		color: theme.sideBar.color,
		fontSize: theme.sideBar.fontSize,
		display: 'flex',
		'&:hover': {
			color: theme.text.highlight
		}
	},
	closedLogoWrapper: {
		color: theme.sideBar.color,
		position: 'static',
		width: '100%',
		bottom: 0
	},
	closedLogo: {
		width: 'inherit',
		padding: '10px'
	},
	logo: {
		color: theme.sideBar.color,
		display: 'flex',
		flexDirection: 'row',
		position: 'fixed',
		bottom: 0,
		height: 30,
		margin: 20,
		'& img': {
			display: 'flex',
			height: '100%',
			marginRight: 20
		},
		'& p': {
			fontSize: '0.7em',
			marginTop: -4,
		}
	},
	select: {
		padding: 0
	},
	sideBarTop: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: theme.appBar.height,
		width: '100%'
	},
	titlesIcon: {
		color: theme.sideBar.color,
		fontSize: 18
	},
	titlesItem: {
		marginLeft: 0,
	},
	titlesList: {
		boxSizing: 'content-box',
		height: '100%',
		//overflowY: 'scroll',
		overflowX: 'hidden',
		maxHeight: '100%',
		paddingRight: 1,
		width: '100%',
		'&::-webkit-scrollbar': {
			width: 1
		}
	},
}))

export default function SideBar(props) {
	const { Orgs, Settings } = useSelector(state => state)
	const { activePage, colorTheme, isMobile, menuOpen, screenDims } = Settings
	const dispatch = useDispatch()
	let history = useHistory()
	const theme = getTheme(colorTheme)
	const classes = useStyles({ isMobile, menuOpen, width: screenDims.width })
	const transitionDuration = 350

	const mainLinks = {
		dashboard: {
			path: '/',
			label: 'Dashboard',
			Icon: theme.icons.dashboard,
			children: []
		},
		admin: {
			path: '/admin',
			label: 'Admin',
			Icon: theme.icons.admin,
			children: []
		}
	}

	const logo = menuOpen
		? ( <div className={classes.logo}>

			</div>
		)
		:
		<>
		</>


	const handleLinkClick = (event, path, label) => {
		event.stopPropagation()
		dispatch(setActivePage(label))
		props.setPage(label)
		isMobile && dispatch(setMenuOpen(!Settings.menuOpen))
	}

	const renderMainLink = ({ Icon, label, path, children }) =>
		<>
			<ListItem
				className={`${classes.listItem} ${props.page === label ? classes.highlight : ''}`}
				onClick={event => handleLinkClick(event,path,label)}>
				<ListItemIcon>
					<div className={classes.row}>
						<div className={`${classes.listItemIcon}`}>{Icon}</div>
						<Typography className={`${classes.listItemText} ${!menuOpen ? classes.hidden : ''} ${activePage === label ? classes.bold : ''}`}>
							{label}
						</Typography>
					</div>
				</ListItemIcon>
			</ListItem>
			{
				children.length && activePage === label && Settings.menuOpen
					?
					children.map((child) => {
						return(
							<ListItem
								className={`${classes.childListItem} ${activePage === label ? classes.childHighlight : ''}`}
								onClick={event => handleLinkClick(event,child.path,label)}>
								<ListItemIcon>
									<div className={classes.row}>
										<Typography className={`${classes.listItemText} ${classes.childListItemText} ${!menuOpen ? classes.hidden : ''} ${activePage === label ? classes.bold : ''}`}>
											{child.label}
										</Typography>
									</div>
								</ListItemIcon>
							</ListItem>
						)
					})
					: <></>
			}
		</>



	// Set active page based on path
	useEffect(() => Object.keys(mainLinks).forEach(link =>
		mainLinks[link].path === history.location.pathname
			? dispatch(setActivePage(mainLinks[link].label))
			: null
	), [])

	return(
		<Drawer
			variant={`${screenDims.width < contentWidth ? 'temporary' : 'permanent'}`}
			anchor="left"
			className={classes.drawer}
			classes={{ paper: menuOpen ? classes.drawerOpen : classes.drawerClose }}
			open={menuOpen}
			transitionDuration={transitionDuration}
			onClick={() => dispatch(setMenuOpen(!menuOpen))}
			onClose={() => dispatch(setMenuOpen(!menuOpen))}>
			{console.log(props.page)}
			<List className={classes.list}>
				{ renderMainLink(mainLinks.dashboard) }
				{ renderMainLink(mainLinks.admin) }
			</List>
			{ logo }
		</Drawer>
	)
}
