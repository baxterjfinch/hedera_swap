const actions = {
	SET_ACTIVE_PAGE: 'SET_ACTIVE_PAGE',
	SET_DASHBOARD_LAYOUT: 'SET_DASHBOARD_LAYOUT',
	SET_ERROR_MESSAGE: 'SET_ERROR_MESSAGE',
	SET_MENU_OPEN: 'SET_MENU_OPEN',
	SET_MODAL_CONTENT: 'SET_MODAL_CONTENT',
	SET_SCREEN_DIMS: 'SET_SCREEN_DIMS',
	SET_SHOW_ERROR: 'SET_SHOW_ERROR',
	SET_SHOW_MODAL: 'SET_SHOW_MODAL',
	SET_THEME: 'SET_THEME',
	ADD_TITLE_TO_FAVORITES: 'ADD_TITLE_TO_FAVORITES',
	SET_ADD_TITLE_TO_FAVORITES: 'SET_ADD_TITLE_TO_FAVORITES',
	REMOVE_TITLE_FROM_FAVORITES: 'REMOVE_TITLE_FROM_FAVORITES'
}

export const setActivePage = page => ({ type: actions.SET_ACTIVE_PAGE, page })
export const setDashboardLayout = layout => ({ type: actions.SET_DASHBOARD_LAYOUT, layout })
export const setErrorMsg = message => ({ type: actions.SET_ERROR_MESSAGE, message })
export const setMenuOpen = menuOpen => ({ type: actions.SET_MENU_OPEN, menuOpen })
export const setModalContent = modalContent => ({ type: actions.SET_MODAL_CONTENT, modalContent })
export const setScreenDims = screenDims => ({ type: actions.SET_SCREEN_DIMS, screenDims })
export const setShowError = showError => ({ type: actions.SET_SHOW_ERROR, showError })
export const setShowModal = showModal => ({ type: actions.SET_SHOW_MODAL, showModal })
export const setTheme = theme => ({ type: actions.SET_THEME, theme })
export const addTitleToFavorites = title => ({ type: actions.ADD_TITLE_TO_FAVORITES, title })
export const setAddTitleToFavorites = response => ({ type: actions.SET_ADD_TITLE_TO_FAVORITES, response })



export default actions