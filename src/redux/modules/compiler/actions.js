
export const actions = {
	SET_COMPILE_CONTRACTS: 'SET_COMPILE_CONTRACTS',
	GET_COMPILE_CONTRACTS: 'GET_COMPILE_CONTRACTS',
	GET_CALL: 'GET_CALL',
	SET_CALL: 'SET_CALL',
	GET_NEW_ACCOUNT: 'GET_NEW_ACCOUNT',
	SET_NEW_ACCOUNT: 'SET_NEW_ACCOUNT'
}

export const setCompiled = (response) => ({ type: actions.SET_COMPILE_CONTRACTS, response })
export const getCompiled = () => ({ type: actions.GET_COMPILE_CONTRACTS })

export const createAccount = (body) => ({ type: actions.GET_NEW_ACCOUNT, body })
export const setAccount = (response) => ({ type: actions.SET_NEW_ACCOUNT, response })

export const getCall = (body) => ({ type: actions.GET_CALL, body })
export const setCall = (response) => ({ type: actions.SET_CALL, response })

export default actions
