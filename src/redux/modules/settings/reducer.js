import actions from './actions'
import getTheme from '../../../themes'

const theme = getTheme()

const initialState = {
	activePage: null,
	errorMsg: 'An error Ocurred',
	menuOpen: window.innerWidth > theme.contentWidth ? true : false,
	showError: false,
	showModal: false,
	isMobile: window.innerWidth < theme.contentWidth,
	orientation: window.innerHeight < window.innerWidth ? 'landscape' : 'portrait',
	home: {
		layout: [
			{i: 'compiled_contracts', x: 0, y: 0, w: 8, h: 1, static: true},
		]
	},
	screenDims: {
		width: 1920,
		height: 1080

	},
	favoriteTitles: JSON.parse(localStorage.getItem('favorite_titles')) || [],
	theme: 'DARK',
}

export default function Settings(state = initialState, action) {
	switch (action.type) {
		case 'persist/REHYDRATE':
			if(action.payload && action.payload.Settings) {
				const { errors, ...persistedSettings } = action.payload.Settings
				return({ ...state, ...persistedSettings } )
			} else return state

		case actions.SET_ACTIVE_PAGE:
			return {
				...state,
				activePage: action.page
			}

		case actions.SET_ADD_TITLE_TO_FAVORITES:
			return {
				...state,
				favoriteTitles: action.response
			}

		case actions.SET_ERROR_MESSAGE:
			return {
				...state,
				errorMsg: action.message
			}

		case actions.SET_DASHBOARD_LAYOUT:
			return {
				...state,
				dashboard: {
					...state.dashboard,
					layout: action.layout
				}
			}

		case actions.SET_MENU_OPEN:
			return {
				...state,
				menuOpen: action.menuOpen
			}

		case actions.SET_SHOW_ERROR:
			return {
				...state,
				showError: action.showError
			}

		case actions.SET_SHOW_MODAL:
			return {
				...state,
				showModal: action.showModal
			}

		case actions.SET_SCREEN_DIMS:
			return {
				...state,
				isMobile: action.screenDims.width <= theme.contentWidth ? true : false,
				orientation: action.screenDims.height < action.screenDims.width ? 'landscape' : 'portrait',
				screenDims: action.screenDims
			}

		case actions.SET_THEME:
			return {
				...state,
				theme: action.theme
			}

		default:
			return state
	}
}