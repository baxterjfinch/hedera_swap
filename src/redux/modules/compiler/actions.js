
export const actions = {
	SET_COMPILE_CONTRACTS: 'SET_COMPILE_CONTRACTS',
	GET_COMPILE_CONTRACTS: 'GET_COMPILE_CONTRACTS',

}

export const setCompiled = (response) => ({ type: actions.SET_COMPILE_CONTRACTS, response })
export const getCompiled = () => ({ type: actions.GET_COMPILE_CONTRACTS })

export default actions