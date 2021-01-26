import logo from '../../logo.svg';
import './App.css';
import React, { useEffect } from "react";
import {connect, useSelector} from 'react-redux'
import { Route, Router, Switch, Redirect } from 'react-router-dom'
import {withRouter} from "react-router";
import { MuiThemeProvider } from '@material-ui/core/styles'
import getTheme from '../../themes'

import Home from "../../pages/Home"

const App = (props) => {
	const {
		dispatch,
		history,
		Settings,
		Compiler
	} = props
	const { theme } = Settings
	const appTheme = getTheme('DARK')

	return (
		<MuiThemeProvider theme={appTheme}>

			<Router history={history}>

				<Switch>
					<Route exact path="/" component={Home}/>

					<Redirect to="/"/>
				</Switch>
			</Router>
		</MuiThemeProvider>
	);
}

const mapStateToProps = ({ Settings }) => ({  Settings });

export default withRouter(connect(mapStateToProps)(App));