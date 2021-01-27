
export const actions = {
	SET_COMPILE_CONTRACTS: 'SET_COMPILE_CONTRACTS',
	GET_COMPILE_CONTRACTS: 'GET_COMPILE_CONTRACTS',
	GET_CALL: 'GET_CALL',
	SET_CALL: 'SET_CALL',

}

export const setCompiled = (response) => ({ type: actions.SET_COMPILE_CONTRACTS, response })
export const getCompiled = () => ({ type: actions.GET_COMPILE_CONTRACTS })
export const getCall = (body) => ({ type: actions.GET_CALL, body })
export const setCall = (response) => ({ type: actions.SET_CALL, response })

export default actions