import { createMuiTheme } from '@material-ui/core/styles'

// Buttons
export const btnDefault = '#B2BCF8'
export const btnHover = '#A0B2FF'
export const btnActive = '#4659C1'
export const btnDisabled = '#ADADAD'
export const btnText = '#FFFFFF'

// Environments
export const envDev = '#5FB8FF'
export const envQA = '#FFD732'
export const envStage = '#C18AEF'
export const envProd = '#F85856'

export const textFont = 'Open sans'
export const textPrimary = '#000000'
export const textSecondary = '#747474'
export const textLight = '#FFFFFF'

// Colors
export const red = '#D15E5E'
export const darkBlue = '#3B3458'
export const lightGrey = '#E3E3E3'
export const darkGrey = '#B4B4B4'
const colorPrimary = '#FE395A'
const colorSecondary = '#9AFFFD'

// Dimensions
export const contentWidth = 1000
export const maxWidth = 1200
export const minWidth = 725


export default createMuiTheme({
	appBar: {
		height: 50,
		zIndex: 1200,
		backgroundColor: '#000000',
		color: '#FFF'
	},
	buttons: {
		contained: {
			default: {
				background: colorPrimary,
				border: 'none',
				color: '#FFFFFF',
			},
			disabled: {
				background: '#3C445A',
				border: 'none',
				color: '#FFFFFF',
			},
			hover: {
				background: `linear-gradient(90deg, ${colorPrimary} 0%, #FF724C 100%) 0% 0% no-repeat padding-box;`,
				border: 'none',
				color: '#FFFFFF',
			},
			active: {
				background: 'linear-gradient(90deg, #FF724C 0%, #FE395A 100%) 0% 0% no-repeat padding-box;',
				border: 'none',
				color: '#FFFFFF',
			}
		},
		outlined: {
			default: {
				background: 'transparent',
				border: '2px solid #666',
			},
			disabled: {
				background: 'transparent',
				border: '2px solid #666',
			},
			hover: {
				background: '#rgba(0,0,0,0.5)',
				border: '2px solid #666',
			},
			active: {
				background: '#3B4053',
				border: '2px solid #FFF',
			}
		},
	},
	colors: {
		primary: colorPrimary,
		secondary: colorSecondary,
	},
	contentWidth,
	dashboard: {
		select: {
			color: '#919191'
		},
		icons: {
			chain_resources: {
				color: '#6BBC7B'
			},
			lib: {
				color: '#E31788'
			},
			indexed: {
				color: '#945CCC'
			},
			soldItems: {
				color: '#22B3CE'
			},
			favorites: {
				color: '#7C749B'
			},
			notifications: {
				color: '#7C749B'
			},
			charts: {
				color: '#7C749B'
			}
		},
		activity: {
			table: {
				color: '#5A5470'
			},
			seeMore: {
				color: '#7485D0'
			}
		}
	},
	environments: {
		colors: {
			PROD: envProd,
			QA: envQA,
			STAGING: envStage,
			DEV: envDev
		}
	},
	icons: {

	},
	overrides: {
		table: {
			transition: '.2s'
		},
		font: {
			fontSize: '.875rem',
			fontWeight400: 400,
			fontWeight100: `100`
		},
		MuiAccordionSummary: {
			root: {
				'&.Mui-expanded': {
					minHeight: 48
				}
			},
			content: {
				'&.Mui-expanded': {
					margin: 0
				}
			}
		},
		MuiButton: {
			root: {
				transition: 'none',
			}
		},
		MuiCheckbox: {
			root: {
				padding: 0
			}
		},
		MuiRadio: {
			root: {
				color: textSecondary,
			},
			colorSecondary: {
				'&.Mui-checked': {
					color: colorPrimary
				},
				'& .Mui-disabled': {
					color: textSecondary,
				},
			},
		},
		PrivateRadioButtonIcon: {
			layer: {
				left: -12,
				top: -12,
				width: 50,
				height: 50
			}
		}
	},
	sideBar: {
		backgroundColor: '#11141b',
		color: '#FFFFFF',
		highlight: '#3C445A',
		childHighlight: '#2a3040',
		fontSize: '.75em',
		widthOpen: 300,
		widthClosed: 50,
	},
	typography: {
		fontFamily: 'Poppins, Open Sans',
		fontSize: 14,
		fontSizeMedium: 26,
		fontSizeLarge: 34,
		fontWeightLight: 100,
		fontWeightMedLight: 300,
		fontWeightMedium: 700,
		fontWeightHeavy: 900,

	},
})
