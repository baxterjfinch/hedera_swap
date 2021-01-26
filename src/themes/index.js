import { responsiveFontSizes } from '@material-ui/core/styles'
import dark from './dark'
import base from './base'

const appThemes = {
	DARK: dark,
	BASE: base
}

export default function getTheme(theme) {
	return responsiveFontSizes(theme ? appThemes[theme] : appThemes['DARK'])
}