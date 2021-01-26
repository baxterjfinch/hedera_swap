import baseTheme from './base'

const colorPrimary = '#FE395A'
const colorSecondary = '#9AFFFD'

const textPrimary = '#FFFFFF'
const textSecondary = '#E4E4E4'
const textLowlight = '#000000'

// card
const bgColor1 = '#262C40'
// main
const bgColor2 = '#171b25'
const bgColor3 = '#3F4456'
const bgColor4 = '#3B4053'
const bgColor5 = '#171D31'
const bgColor6 = `#212733`
const bgColor7 = `#202531` // left
const bgColor8 = `#151920` // mid
const bgColor9 = `#000000` // right
const bgGradient = `linear-gradient(193.68deg, #000000 0.68%, ${bgColor6} 100.48%)`
const bgGradientLeft = `linear-gradient(193.68deg, ${bgColor8} 0.68%, ${bgColor7} 100.48%)`
const bgGradientRight = `linear-gradient(193.68deg, ${bgColor9} 0.68%, ${bgColor8} 100.48%)`
const bgDark = '#11141b'
const hoverBackground = "#2a3040";
const activeBackground = "#3C445A";

const theme = {
	...baseTheme,
	body: {
		backgroundColor: bgColor2,
		backgroundColorGradientCorner: bgColor6,
		background: bgGradient,
		backgroundLeft: bgGradientLeft,
		backgroundRight: bgGradientRight
	},
	buttons: {
		...baseTheme.buttons,
		outlined: {
			...baseTheme.buttons.outlined,
			default: {
				...baseTheme.buttons.outlined.default,
				color: textPrimary,
			}
		}
	},
	card: {
		background: bgGradient,
		header: {
			backgroundColor: bgColor5,
			color: textSecondary,
		}
	},
	environments: {
		...baseTheme.environments,
		card: {
			backgroundColor: '#3C4153',
		},
	},
	imageUploader: {
		backgroundColor: bgColor3,
	},
	modal: {
		backgroundColor: bgColor1,
	},
	overrides: {
		...baseTheme.overrides,
		MuiCheckbox: {
			...baseTheme.overrides.MuiCheckbox,
			colorSecondary: {
				'&.Mui-disabled': {
					color: 'rgba(255,255,255,0.25)'
				},
			},
			root: {
				...baseTheme.overrides.MuiCheckbox.root,
				color: textPrimary
			}
		},
		MuiFormControlLabel: {
			label: {
				'&.Mui-disabled': {
					color: textSecondary
				}
			}
		},
		MuiFormHelperText: {
			root: {
				color: textSecondary,
				'&.Mui-error': {
					color: colorPrimary,
				}
			},
		},
		MuiFormLabel: {
			root: {
				color: textPrimary,
				'&.Mui-disabled': {
					color: textSecondary,
				},
				'&.Mui-focused': {
					color: colorSecondary,
				},
				'&.Mui-error': {
					color: colorPrimary,
				},
			},
		},
		MuiIconButton: {
			root: {
				color: textSecondary,
			},
		},
		MuiInput: {
			underline: {
				'&:before': {
					borderBottomColor: textSecondary,
				},
				'&:after': {
					borderBottomColor: textSecondary,
				},
				'&:hover:before': {
					borderBottomColor: [textSecondary, '!important'],
				},
				'&.Mui-error:after': {
					borderBottomColor: colorPrimary,
				},
			},
			root: {
				color: textPrimary,
				'&:hover': {
					borderBottom: 'none'
				},
				'& .Mui-disabled': {
					color: textPrimary,
				},
			},
		},
		MuiInputAdornment: {
			root: {
				color: textPrimary,
			}
		},
		MuiPaper: {
			root: {
				backgroundColor: bgColor1,
				color: textPrimary,
			}
		},
		MuiPickersDay: {
			day: {
				color: textPrimary,
			},
		},
		MuiPickersCalendarHeader: {
			dayLabel: {
				color: textSecondary,
			},
			iconButton: {
				backgroundColor: 'none'
			}
		},
		MuiPickersToolbar: {
			toolbar: {
				backgroundColor: bgColor5,
			}
		},
		MuiPopover: {
			paper: {
				backgroundColor: bgColor1,
			},
		},
		MuiSelect: {
			icon: {
				color: textPrimary
			}
		},
		MuiTypography: {
			colorTextSecondary: {
				color: textSecondary
			}
		}
	},
	palette: {
		...baseTheme.palette,
		primary: {
			...baseTheme.palette.primary,
			main: colorPrimary,
		},
		secondary: {
			...baseTheme.palette.secondary,
			main: colorSecondary,
		}
	},
	select: {
		backgroundColor: bgColor4,
	},
	table: {
		backgroundColor: 'transparent',
		actions: {
			color: '#C9C9C9'
		},
		header: {
			backgroundColor: '#31364A'
		},
		highlight: {
			backgroundColor: bgColor5
		},
		rows: {
			hoverBackgroundColor: hoverBackground,
			activeBackgroundColor: activeBackground,
			backgroundColor: bgColor5
		}
	},
	tabs: {
		indicator: colorPrimary,
		buttonTabs: {
			root: {
				backgroundColor: bgColor4,
				color: '#666'
			},
			selected: {
				backgroundColor: '#DADBDF'
			}
		}
	},
	text: {
		primary: textPrimary,
		secondary: textSecondary,
		highlight: colorSecondary,
		lowlight: textLowlight,
		mint: colorSecondary,
		primaryRed: colorPrimary,
	},
}

export default theme