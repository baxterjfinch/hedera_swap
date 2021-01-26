import { call,  put, select } from 'redux-saga/effects'
// import { setErrorMsg, setShowError } from './modules/settings'

function* hasError(msg) {
	try {
		yield put(msg)
	} catch(err) {}
}

export function* swapFetcher(apiMethod, params=[] ) {
	const state = yield select()

	const options = {
	}

	try {
		const response = yield call(apiMethod, options, ...params)

		if(response === undefined){
			yield hasError(`An unknown error occurred`)
			return null
		}
		if(response.code){
			yield hasError(`Error code ${response.code}: ${response.message}`)
			return null
		}
		if(response.status === 500){
			yield hasError(`Error code 500 fetching: ${response.url}`)
			return null
		}

		return response

	} catch(error) {
		console.error(error)
		hasError("An error occurred. Please try again.")
	}

}