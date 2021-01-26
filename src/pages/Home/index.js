import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import GridLayout, { WidthProvider } from 'react-grid-layout'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import { setActivePage, setDashboardLayout } from '../../redux/modules/settings'
import getTheme from '../../themes'
import Page from "../../components/UI/Page";
import CompiledContracts from "../../components/Widgets/CompiledContracts";

const ResponsiveGridLayout = WidthProvider(GridLayout)
const useStyles = makeStyles({
	col: {
		display: 'flex',
		flex: 1,
		flexDirection: 'column',
		'&:last-child': {
			marginLeft: 20,
		}
	},
	row: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	dashContainer: ({ height }) => ({
		marginTop: 20,
		width: '100%',
		height: height - 200
	}),
	envSelect: {
		width: 350,
	},
	page: {
		height: '100%'
	},
	select: {
		marginLeft: 10,
		marginRight: 10
	},
}, {name: "Dashboard"})


export default function Dashboard() {
	const dispatch = useDispatch()
	const { Settings, Compiled } = useSelector(state => state)
	const { colorTheme, home, screenDims } = Settings
	const theme = getTheme(colorTheme)
	const classes = useStyles({ height: screenDims.height })

	useEffect(() => {
		dispatch(setActivePage('Dashboard'))
	},[])

	return (
		<Page>
			<ResponsiveGridLayout
				className={classes.dashContainer}
				isBounded={true}
				layout={home.layout}
				cols={24}
				margin={[16,16]}
				containerPadding={[0,0]}
				compactType='vertical'
			>
				<div key="compiled_contracts">
					<CompiledContracts />
				</div>

			</ResponsiveGridLayout>
		</Page>

	)
}